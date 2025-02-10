import { base } from '$app/paths';

export function handle({ event, resolve }) {
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace(/href="\//g, `href="${base}/#`)
  });
}