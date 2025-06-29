/**
 * JWT 토큰의 payload를 디코딩하여 객체로 반환합니다.
 * @param token JWT 문자열
 * @returns payload의 JSON 객체 또는 null
 */
export function decodeToken(token: string): any | null {
  try {
    const payload = token.split('.')[1]
    const decoded = atob(payload)
    return JSON.parse(decoded)
  } catch (e) {
    console.error('JWT 디코딩 오류:', e)
    return null
  }
}

/**
 * JWT 토큰에서 사용자 이름을 추출합니다.
 * @param token JWT 문자열
 * @returns 사용자 이름 문자열 또는 null
 */
export function getUserNameFromToken(token: string): string | null {
  const decoded = decodeToken(token)
  return decoded?.name || decoded?.username || null
}
