import axios from 'axios';

export async function linkedinMessage(data, post) {
  const resData = {
    'content': {
      'contentEntities': [
        {
          'entityLocation': `${post.image[0].link}`,
          'thumbnails': [
            {
              'resolvedUrl': `${post.image[0].link}`,
            },
          ],
        },
      ],
      'title': `${post.title}`,
    },
    'distribution': {
      'linkedInDistributionTarget': {},
    },
    'owner': `urn:li:person:${data.authorizId}`,
    'subject': `${post.title}`,
    'text': {
      'text': `${post.body}`,
    },
  };
  const response = await axios('https://api.linkedin.com/v2/shares', {
    method: 'POST',
    data: (resData),
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },

  });
  return response.data;
}
