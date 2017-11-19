export const getRetinaPath = function (imagePath) {
  const pathParts = imagePath.split(`.`)
  const resolutionModifier = `2x`

  pathParts[pathParts.length - 2] = `${pathParts[pathParts.length - 2]}@${resolutionModifier}`

  return `${pathParts.join(`.`)} ${resolutionModifier}`
}
