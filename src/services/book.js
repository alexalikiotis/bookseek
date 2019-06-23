import axios from 'axios';

import config from '../config';

export const recognizePicture = async picture => {
  const googleVisionUri =
    'https://vision.googleapis.com/v1/images:annotate?key=';
  const url = googleVisionUri + config.googleVision.apiKey;

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
