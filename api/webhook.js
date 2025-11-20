export default function handler(req, res) {
  console.log('Incoming request:', {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  return res.status(200).json({ ok: true });
}
