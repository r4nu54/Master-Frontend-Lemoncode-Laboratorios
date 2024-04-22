import axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
const url = 'api/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await axios.get<Character>(`${url}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  await axios.post(url, character);
  return true;
};
