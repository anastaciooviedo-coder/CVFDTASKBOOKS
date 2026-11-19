import { getStore } from '@netlify/blobs';
import { route } from '../../server/core.mjs';

// One function serves every /api/* request for the phase book and the hub.
export default async (req) => {
  const store = getStore({ name: 'cvfd-phasebook', consistency: 'strong' });
  return route(req, store, process.env.ADMIN_PIN || '');
};

export const config = { path: '/api/*' };
