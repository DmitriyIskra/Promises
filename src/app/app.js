import GameSavingLoader from './loader';

const gameSavingLoader = new GameSavingLoader();

GameSavingLoader.load()
                    .then((saving) => {
                      console.log(saving)
                    }), (error) => {
                      console.log(error)
                    } 

