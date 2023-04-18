import GameSavingLoader from './loader';

GameSavingLoader.load()
                    .then(saving => console.log(saving)),
                    error => console.log(error) 
