import axios from 'axios';

import config from '@/config';

export const findReviews = async isbn => {
  const iDreamBooksUri = `https://idreambooks.com/api/books/reviews.json?q=${isbn}&key=${config.iDreamBooksApiKey}`;

  const response = await axios.get(iDreamBooksUri);
  const responseData = response.data;

  if (responseData.total_results === 0) {
    throw new Error('No reviews found');
  }

  const data = {
    reviewsLink: responseData.book.detail_link,
    reviews: responseData.book.critic_reviews,
  };

  return data;
};
