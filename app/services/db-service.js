import SQLite from 'react-native-sqlite-storage';

const tableName = 'restaurant';
SQLite.enablePromise(true)
export const getDBConnection = async () => {
    return SQLite.openDatabase({ name: 'restaurant-data.db', location: 'default' });
    // return  SQLite.openDatabase(
    //     {
    //         name: 'restaurants.db',
    //         location: 'default',
    //     },
    //     () => { },
    //     error => { console.log(error) }
    // );
};

export const createTable = async (db) => {
    
    await db.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS "
            +tableName
            + `(ID INTEGER PRIMARY KEY AUTOINCREMENT, Title TEXT, Address TEXT ,
                Latitude TEXT),
                Longitude TEXT),
                Rating TEXT),
                Total_review TEXT),
                Description TEXT),
                Mobile TEXT),
                Images TEXT)
                );`
        )
    })
    // await db.executeSql(query);
};

export const getRestaurantItems = async (db) => {
    try {
        const restaurantItems = [];
        const results = await db.executeSql(`SELECT ID,Title,Address,Latitude,Longitude,Rating,Total_review,Description,Mobile,Images FROM ${tableName}`);
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                restaurantItems.push(result.rows.item(index))
            }
        });
        return restaurantItems;
    } catch (error) {
        console.log('error -=-==>> ',error);
        // throw Error('Failed to get restaurant !!!');
    }
};



export const saveRestaurantItems = async (db, restaurantItems) => {
   
    const insertQuery =
        `INSERT OR REPLACE INTO ${tableName}(ID,Title,Address,Latitude,Longitude,Rating,Total_review,Description,Mobile,Images) values` +
        todoItems.map(i => `(${i.id}, '${i.title}','${i.address}','${i.latitude}','${i.longitude}','${i.rating}','${i.total_review}','${i.description}','${i.mobile}','${i.images}')`).join(',');

    return db.executeSql(insertQuery);
};
