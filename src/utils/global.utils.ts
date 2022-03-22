/**
 * Checks is value empty, null or undefined
 * If value is array, checks is length of value greater of zero
 * @param value - The value it checks
 * @returns Is value empty
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined || value === '') {
    return true;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
};
