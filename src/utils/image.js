import {
  pathScans,
  pathMagazineName,
  pathThumbsContent,
  pathThumbsScan
} from 'constants/paths'
import { addLeftPadding } from 'utils/text.js'

export const getRetinaPath = function (imagePath) {
  const pathParts = imagePath.split(`.`)
  const resolutionModifier = `2x`

  pathParts[pathParts.length - 2] = `${pathParts[pathParts.length - 2]}@${resolutionModifier}`

  return `${pathParts.join(`.`)} ${resolutionModifier}`
}

export function buildPageThumbPath(imagePath) {
  return `${pathThumbsScan}${imagePath}`
}

export function buildScanPath(imagePath) {
  return `${pathScans}${imagePath}`
}

export function buildScanPathForContent(imagePath) {
  return `${pathThumbsContent}${imagePath}`
}

// Build scan path as in database table 'scans'
// Example output: 'zzap/21/46.jpg'
export function buildScanDatabasePath(magazineID, issueID, page) {
  return `${pathMagazineName[magazineID]}/${issueID}/${addLeftPadding(page, `0`, 2)}.jpg`
}
