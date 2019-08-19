import axios from 'axios';
import stringSimilarity from 'string-similarity';
import { findIndex, propEq } from 'ramda';

import config from '@/config';
import localTestPicture from './picture.json';

export const recognizePicture = async (
  picture = localTestPicture,
  suggestions = 3
) => {
  // Perform OCR in given picture

  const googleVisionUri =
    'https://vision.googleapis.com/v1/images:annotate?key=';
  const googleVisionUrl = googleVisionUri + config.googleVisionApiKey;

  const requestBody = {
    requests: [
      {
        features: [
          {
            type: 'TEXT_DETECTION',
          },
        ],
        image: {
          content: picture.base64,
        },
      },
    ],
  };

  console.log('Requesting data from google vision...');
  const ocrResponse = await axios.post(googleVisionUrl, requestBody);
  const ocrResponseData = ocrResponse.data.responses[0].fullTextAnnotation
    ? ocrResponse.data.responses[0].fullTextAnnotation.text
        .split('\n')
        .join(' ')
    : null;

  if (!ocrResponseData) {
    throw new Error('No text recognized in picture');
  }

  // Search Google Books API for given text

  const googleBooksUri = 'https://www.googleapis.com/books/v1/volumes?q=';
  const googleBooksUrl = googleBooksUri + ocrResponseData;

  console.log('Requesting data from google books...');
  const booksResponse = await axios.get(googleBooksUrl);
  const booksResponseData = booksResponse.data;

  if (booksResponseData.totalItems === 0) {
    throw new Error('No results from google books');
  }

  const items = booksResponseData.items
    .map(item => ({
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      categories: item.volumeInfo.categories,
      language: item.volumeInfo.language,
      pageCount: item.volumeInfo.pageCount,
      previewLink: item.volumeInfo.previewLink,
      publishedDate: item.volumeInfo.publishedDate,
      publisher: item.volumeInfo.publisher,
      industryIdentifiers: item.volumeInfo.industryIdentifiers,
      averageRating: item.volumeInfo.averageRating,
    }))
    .filter(item => {
      // Accept books with available isbn-13
      const isbn13Index = findIndex(
        propEq('type', 'ISBN_13'),
        item.industryIdentifiers || {}
      );
      return isbn13Index === -1 ? false : true;
    })
    .map(item => {
      const str = item.title + ' ' + item.authors.join(' ');
      const confidence = stringSimilarity.compareTwoStrings(
        str.toLocaleLowerCase(),
        ocrResponseData.toLocaleLowerCase()
      );

      return {
        ...item,
        confidence,
      };
    })
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, suggestions);

  return items;
};
