import GameSavingLoader from '../loader';

test('test saving', async () => {
    const gameSawing = await GameSavingLoader.load();        

    expect(gameSawing).toEqual(
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