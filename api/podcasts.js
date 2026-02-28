export default function handler(req, res) {
  const podcasts = require('../data/podcasts.json');
  res.status(200).json(podcasts);
}
