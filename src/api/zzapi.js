const ENTITIES = {
  issue: (magazineId, issueId) => `api/v1/magazine/${magazineId}/issue/${issueId}`,
  magazine: magazineId => `api/v1/magazine/${magazineId}`
}

export {
  ENTITIES
}
