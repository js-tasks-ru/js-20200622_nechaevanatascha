/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sort = (param === 'asc') ? 1 : -1;
  return [...arr].sort((string1, string2) => string1.localeCompare(string2, [] ,  {caseFirst: 'upper'})*sort);
}
