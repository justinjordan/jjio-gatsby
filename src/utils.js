import React from 'react'

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

/**
 * Gets property value without throwing error on undefined
 * @param {object} obj  Object containing property
 * @param {string} prop String with dot separated property address
 * @return {mixed} Returns property value, or null
 */
export const safeGetProp = (obj, prop) => {
  const parts = prop.split('.')
  let currentObj = obj

  for (let part of parts) {
    if (!part || typeof currentObj !== 'object' || !currentObj[part]) {
      return null
    }

    currentObj = currentObj[part]
  }

  return currentObj
}