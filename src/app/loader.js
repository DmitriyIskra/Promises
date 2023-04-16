import read from "./reader";
import json from "./parser";
import GameSaving from "./gameSaving";


export default class GameSavingLoader {

  static load() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        resolve(
          read()
            .then((saving) => {
              const jsonStr = json(saving);
              return jsonStr  
            })
            .then((jsonStr) => {
              const data = JSON.parse(jsonStr)
              const gameSaving = new GameSaving(data.id, data.created, data.userInfo)
              return gameSaving
            })
            .catch(error => error)); 
      }, 1000);
    });
  }
}
