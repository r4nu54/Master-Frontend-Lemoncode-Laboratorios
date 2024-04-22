export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentences: string;
}
