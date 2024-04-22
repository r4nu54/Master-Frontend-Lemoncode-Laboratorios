export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  bestSentences: string;
}

export const createEmptyCharater = (): Character => ({
  id: 0,
  name: '',
  status: '',
  image: '',
  bestSentences: '',
});
