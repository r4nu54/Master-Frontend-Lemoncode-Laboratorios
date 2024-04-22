import * as React from 'react';
import { Character } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapCharacterFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<Character[]>([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapCharacterFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};
