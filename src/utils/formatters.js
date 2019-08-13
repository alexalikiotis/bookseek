export const formatPictureQuality = value => {
  switch (value) {
    case 1:
      return 'Very High';
    case 0.75:
      return 'High';
    case 0.5:
      return 'Average';
    default:
      return 'Low';
  }
};
