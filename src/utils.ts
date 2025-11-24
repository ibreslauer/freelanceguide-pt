/**
 * Get the base URL with a trailing slash, works in both dev and production
 * - Dev: returns "/"
 * - Production: returns "/freelanceguide-pt/"
 */
export function getBaseUrl(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : base + '/';
}
