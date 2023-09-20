export function truncateText(input, length) {
  return input.length > length
    ? input.substring(0, length) + '...'
    : input;
};