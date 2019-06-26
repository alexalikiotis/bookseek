import axios from 'axios';

import config from '../config';
import picture from './picture.json'; // To be removed

export const recognizePicture = async () => {
  const googleVisionUri =
    'https://vision.googleapis.com/v1/images:annotate?key=';
  const url = googleVisionUri + config.googleVisionApiKey;

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

  const response = await axios.post(url, requestBody);

  return response;
};
