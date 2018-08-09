
// can be replaced with i18n system.
const titleMessages = {
  dashboard: 'Dashboard',
};

export const getTitle = (appStore) => {
  const pageName = appStore.view.page;
  switch (pageName) {
    case 'dashboard':
      return titleMessages[pageName];
    default:
      return '404';
  }
};

export default getTitle;
