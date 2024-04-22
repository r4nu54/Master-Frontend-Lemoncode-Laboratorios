import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterFromApiToVm = (character: apiModel.Character): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  location: character.location,
  image: character.image,
  episode: character.episode,
  url: character.url,
  created: character.created,
  bestSentences: character.bestSentences,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    location: character.location,
    image: character.image,
    episode: character.episode,
    url: character.url,
    created: character.created,
    bestSentences: character.bestSentences,
  } as apiModel.Character);
