export const ZZAPI_RESOURCES = {
  issue: (magazineId, issueId) => `api/v1/magazine/${magazineId}/issue/${issueId}`,
  magazine: magazineId => `api/v1/magazine/${magazineId}`
}

