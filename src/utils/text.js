export const addLeftPadding = function (text, paddingChar, maxLength) {
  let paddedText = text.toString()

  while (paddedText.length < maxLength) {
    paddedText = `${paddingChar}${paddedText}`
  }

  return paddedText
}
