import { setTimeout } from 'node:timers/promises';

const baseUrl = new URL(process.env.AZURE_SWA_URL ?? '');
if (baseUrl.protocol !== 'https:' || !baseUrl.hostname.endsWith('.azurestaticapps.net')) {
  throw new Error('AZURE_SWA_URL must be the Azure-generated HTTPS hostname.');
}

const pages = new Map([
  ['/', 'AI Systems Engineering &amp; Assurance Lab'],
  ['/research/', 'Research'],
  ['/people/', 'People'],
  ['/publications/', 'Publications'],
  ['/projects/', 'Projects'],
  ['/contact/', 'Contact'],
]);
const missingPath = '/aisea-smoke-test-missing/';
pages.set(missingPath, 'Page not found');

async function checkPage(path, heading) {
  const response = await fetch(new URL(path, baseUrl), { signal: AbortSignal.timeout(8000) });
  const html = await response.text();
  const expectedStatus = path === missingPath ? 404 : 200;
  if (response.status !== expectedStatus || !html.includes(`<h1>${heading}</h1>`)) {
    throw new Error(`${path} returned HTTP ${response.status} or an unexpected heading`);
  }
}

for (let attempt = 1; ; attempt += 1) {
  try {
    await Promise.all([...pages].map(([path, heading]) => checkPage(path, heading)));
    console.log(`Verified six pages and the 404 route at ${baseUrl.origin}`);
    break;
  } catch (error) {
    if (attempt === 10) throw error;
    console.log(`Waiting for Azure deployment (${attempt}/10)`);
    await setTimeout(3000);
  }
}
