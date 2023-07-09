const mapping: Record<string, string> = {
  bots: 'bot',
  companies: 'company',
  sessions: 'session',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
