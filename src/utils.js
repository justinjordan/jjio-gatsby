/**
 * Truncates a sentence with elipses
 * @param {string} input Sentence to be shortened
 * @param {number} limit Maximum allowed words
 * @return {string} Truncated string
 */
export const truncate = (input, limit) => {
  if (!input) {
    return input
  }

  let words = input.split(/[\s]+/)
  if (words.length <= limit) {
    return input
  }

  return words.slice(0, limit).join(' ') + '...'
}

/**
 * Converts HTML data to text
 * @param {string} input Text containing HTML data
 * @return {string} Clean text
 */
export const htmlDecode = (input) => {
  if (typeof document === 'undefined') {
    return input
  }

  const el = document.createElement("div");
  el.innerHTML = input;
  return el.innerText;
}