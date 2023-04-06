import read from '../reader';
import json from '../parser';
import GameSavingLoader from '../loader';

const gameSavingLoader = new GameSavingLoader();

test('test saving', async () => {
    await gameSavingLoader.load()
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

    expect(gameSavingLoader.gameSaving).toEqual(
        {
            id:9,
            created:1546300800,
            userInfo:{
                id:1,
                name:"Hitman",
                level:10,
                points:2000}
        }      
    )
})