import axios from 'axios';

export const getBookById = async id => {
  // Search Google Books API for given id
  const googleBooksUri = 'https://www.googleapis.com/books/v1/volumes?q=';
  const googleBooksUrl = googleBooksUri + id;

  const booksResponse = await axios.get(googleBooksUrl);
  const booksResponseData = booksResponse.data;

  if (booksResponseData.totalItems === 0) {
    throw new Error('No results from google books');
  }

  const items = booksResponseData.items.map(item => ({
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
  }));

  return items;
};
