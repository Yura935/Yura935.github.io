// Encodes demo login data for Open demo links. Inputs: user + password. Returns: base64url JSON token.

export type DemoCredentials = {
  u: string
  p: string
}

// Encodes credentials object into a URL-safe demo token.
export function encodeDemoCredentials(user: string, password: string): string {
  const payload: DemoCredentials = { u: user, p: password }
  const base64 = btoa(JSON.stringify(payload))
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

// Builds a live demo URL with encoded credentials in the `demo` query param.
export function buildDemoUrl(liveUrl: string, user: string, password: string): string {
  const url = new URL(liveUrl)
  url.searchParams.set('demo', encodeDemoCredentials(user, password))
  return url.toString()
}
