import podcasts from '../data/podcasts.json';

export default function handler(req, res) {
  res.status(200).json(podcasts);
}