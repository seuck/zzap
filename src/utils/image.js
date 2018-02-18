import {
  scanBasePath,
  thumbBasePath
} from 'constants/paths'

export const getRetinaPath = function (imagePath) {
  const pathParts = imagePath.split(`.`)
  const resolutionModifier = `2x`

  pathParts[pathParts.length - 2] = `${pathParts[pathParts.length - 2]}@${resolutionModifier}`

  return `${pathParts.join(`.`)} ${resolutionModifier}`
}

export function buildPageThumbPath(imagePath) {
  return `${thumbBasePath}${imagePath}`
}

export function buildScanPath(imagePath) {
  return `${scanBasePath}${imagePath}`
}
