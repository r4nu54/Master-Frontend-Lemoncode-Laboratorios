import axios from 'axios';
import { Character } from './character-collection.api-model';

const url = 'api/characters';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const response = await axios.get(url).then((response) => response.data);
  return response;
};
