export const getMonthDay = (date, type = 'md') => {
  const dateString = date.toDateString();
  const dateWords = dateString.split(' ');
  if (type === 'md') return `${dateWords[1]} ${dateWords[2]}`;
  else if (type === 'mdy')
    return `${dateWords[0]} ${dateWords[1]} ${dateWords[2]}, ${dateWords[3]}`;
};

// md: Apr 03,
// mdy: Tue Apr 03, 2021
export const getLabelFromDateRange = (label, type = 'md') => {
  const today = new Date();
  const prefix = type === 'md' ? `${label}, ` : '';

  switch (label) {
    case 'Today':
      return `${prefix}${getMonthDay(today, type)}`;
    case 'Yesterday':
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      return `${prefix}${getMonthDay(yesterday, type)}`;
    case '7 Days':
      const earlierDate = new Date(today);
      earlierDate.setDate(earlierDate.getDate() - 7);
      return `${prefix}${getMonthDay(earlierDate, type)} - ${getMonthDay(
        today,
        type,
      )}`;
    case '30 days':
      const previousDate = new Date(today);
      previousDate.setDate(previousDate.getDate() - 30);
      return `${prefix}${getMonthDay(previousDate, type)} - ${getMonthDay(
        today,
        type,
      )}`;
    default:
      return '';
  }
};
