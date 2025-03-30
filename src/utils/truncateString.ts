export const truncateString = (value: string, length = 20) =>
  value.length < length ? value : value.slice(0, length)
