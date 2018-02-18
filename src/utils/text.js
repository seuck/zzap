import {
  MONTHS
} from 'locales/localedate'

export const addLeftPadding = function (text, paddingChar, maxLength) {
  let paddedText = text.toString()

  while (paddedText.length < maxLength) {
    paddedText = `${paddingChar}${paddedText}`
  }

  return paddedText
}

export function getMonthNameFromNumber(monthNumber) {
  return MONTHS.it[monthNumber - 1]
}
