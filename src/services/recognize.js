import axios from 'axios';

import config from '@/config';
import picture from './picture.json';

export const recognizePicture = async () => {
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

  let response;
  let responseData;

  console.log('Requesting data from google vision...');
  response = await axios.post(googleVisionUrl, requestBody);
  responseData = response.data.responses[0].fullTextAnnotation
    ? response.data.responses[0].fullTextAnnotation.text
    : null;

  if (!responseData) {
    throw new Error('No text recognized in picture');
  }

  // Search Google Books API for given text

  const googleBooksUri = 'https://www.googleapis.com/books/v1/volumes?q=';
  const googleBooksUrl = googleBooksUri + responseData.replace('\n', ' ');

  console.log('Requesting data from google books...');
  response = await axios.get(googleBooksUrl);
  responseData = response.data;

  if (responseData.totalItems === 0) {
    throw new Error('No results from google books');
  }

  const items = responseData.items.map(item => {
    return {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      categories: item.volumeInfo.categories,
      language: item.volumeInfo.language,
      pageCount: item.volumeInfo.pageCount,
      thumbnail: item.volumeInfo.imageLinks.smallThumbnail,
      previewLink: item.volumeInfo.previewLink,
      publishedDate: item.volumeInfo.publishedDate,
      // publisher: item.volumeInfo.publisher,
      industryIdentifiers: item.volumeInfo.industryIdentifiers,
      averageRating: item.volumeInfo.averageRating,
      // ratingsCount: item.volumeInfo.ratingsCount,
      // maturityRating: item.volumeInfo.maturityRating,
    };
  });

  console.log(items);

  return items;
};
