import episodes from '../data/episodes.json';

export default function handler(req, res) {
  res.status(200).json(episodes);
}