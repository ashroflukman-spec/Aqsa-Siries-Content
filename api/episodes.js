export default function handler(req, res) {
  const episodes = require('../data/episodes.json');
  res.status(200).json(episodes);
}
