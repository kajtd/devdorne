function formatDate(isoString: string): string {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthName = monthNames[month];

  const formattedDate = `${monthName} ${String(day).padStart(
    2,
    '0'
  )} ${year}`;

  return formattedDate;
}

export { formatDate };
