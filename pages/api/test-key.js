export default function handler(req, res) {
  const key = process.env.OPENAI_API_KEY;
  res.status(200).json({
    ok: !!key,
    preview: key ? key.slice(0, 4) + "..." : null
  });
}
