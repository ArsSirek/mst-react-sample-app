export const isProduction = process.env.NODE_ENV === 'production';

export const getUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return ''
    case 'development':
      return 'http://dev.frontend.parking.works';
    case 'stage':
      return 'https://stage.wildcardparking.com';
  }
};