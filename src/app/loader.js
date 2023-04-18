import read from "./reader";
import json from "./parser";
import GameSaving from "./gameSaving";


export default class GameSavingLoader {

static load() {
            return read()
                .then(data => json(data))
                .then(json => JSON.parse(json))
                .then(obj => new GameSaving(obj.id, obj.created, obj.userInfo))
  }
}
