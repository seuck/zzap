import axios from 'axios'
import { ZZAPI_RESOURCES } from 'api/zzapi'
import {
  TEXTS
} from 'locales/localedate'
import {
  pathScans
} from 'constants/paths'
import {
  getMonthNameFromNumber
} from 'utils/text'

function buildScanPath(imagePath) {
  return `${pathScans}${imagePath}`
}

function buildDoublePageForReader(firstPage, lastPage) {
  const doublePage = {}

  if (typeof firstPage !== `undefined`) {
    doublePage.first = {
      label: firstPage.label,
      path: buildScanPath(firstPage.scan.path)
    }
  }
  if (typeof lastPage !== `undefined`) {
    doublePage.last = {
      label: lastPage.label,
      path: buildScanPath(lastPage.scan.path)
    }
  }

  return doublePage
}

export function doublePages(issue) {
  const doublePageArray = []

  for (let i = 1; i < issue.volumes[0].pages.length - 1; i += 2) {
    doublePageArray.push(i)
  }

  return doublePageArray
}

export function buildIssueReaderData(issueData, startPage, returnBookmark) {
  const data = {}
  const formattedDate = `${getMonthNameFromNumber(+issueData.month)} ${issueData.year}`

  // eslint-disable-next-line max-len
  data.title = `${issueData.magazine.name} ${TEXTS.it.issue} ${issueData.sequence} - ${formattedDate}`
  data.pages = []

  // Cover
  data.pages.push(buildDoublePageForReader(
    undefined,
    issueData.volumes[0].pages[0]
  ))

  // Spreads
  doublePages(issueData).forEach((page) => {
    data.pages.push(buildDoublePageForReader(
      issueData.volumes[0].pages[+page],
      issueData.volumes[0].pages[+page + 1]
    ))
  })

  // Back cover
  data.pages.push(buildDoublePageForReader(
    issueData.volumes[0].pages[issueData.volumes[0].pages.length - 1]
  ))

  data.startPage = Math.floor(+startPage / 2)
  data.returnBookmark = returnBookmark
  data.labelPrefix = `Pagina`

  return data
}

export function getIssueReaderDataAndCallCallback({
  magazineId, issueId, returnBookmark, startPage = 0
}, callback) {
  axios.get(ZZAPI_RESOURCES.issue(magazineId, issueId))
    .then((response) => {
      const readerData = buildIssueReaderData(response.data, startPage, returnBookmark)

      callback(readerData)
    })
}

