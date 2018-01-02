const basePath = `api/v1/`

export const ZZAPI_RESOURCES = {
  game: gameId => `${basePath}game/${gameId}`,
  gameFinder: query => `${basePath}game/find/${query}`,
  issue: (magazineId, issueId) => `${basePath}magazine/${magazineId}/issue/${issueId}`,
  magazine: magazineId => `${basePath}magazine/${magazineId}`
}

