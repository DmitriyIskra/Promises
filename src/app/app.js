import read from './reader';
import json from './parser';
import GameSavingLoader from './loader';

const gameSavingLoader = new GameSavingLoader();

gameSavingLoader.load()
  .then((saving) => {
    saving = read();
    return saving;
  })
  .then((saving) => {
    const jsonString = json(saving);
    return jsonString;
  })
  .then((data) => {
    gameSavingLoader.gameSaving = JSON.parse(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(gameSavingLoader.gameSaving);
  });
