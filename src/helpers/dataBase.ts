import { ArticleModel } from "../models/articleModel";
import { InventoryModel } from "../models/inventoryModel";
import { InventoryMovementModel } from "../models/inventoryMovementModel";
import { LocationModel } from "../models/locationModel";
import { UserModel } from "../models/UserModel";

const dataBase = async () => {



    // Registros de artículos
    const articles = [
        {
            name: 'Barra perf',
            brand: 'Sandivk',
            group1: 'T38',
            group2: '6m',
        },
        {
            name: 'Barra perf',
            brand: 'FRD',
            group1: 'T45',
            group2: '2m',
        },
        {
            name: 'Barra ini',
            brand: 'Sandvik',
            group1: 'T51',
            group2: '',
        },
        {
            name: 'Barra ini',
            brand: 'FRD',
            group1: 'T45',
            group2: '',
        },
        {
            name: 'Broca',
            brand: 'Sandvik',
            group1: 'T45',
            group2: 'Lisa',
        },
        {
            name: 'Broca',
            brand: 'Atlas',
            group1: 'T38',
            group2: 'Estriada',
        },
        {
            name: 'Fil aire',
            brand: 'filt',
            group1: 'x29',
            group2: 'www',
        },
      
    ];

    const insertedArticles:any = await ArticleModel.bulkCreate(articles);


    // Registros de locaciones
    const locations = [
        {
            name: 'Central',
            description: 'Albardón'
        },
        {
            name: 'Prveedor',
            description: ''
        },
        {
            name: 'Descarte',
            description: ''
        },
        {
            name: 'Tocota',
            description: ''
        },
        {
            name: 'Barker',
            description: ''
        },
        {
            name: 'La Garrapata',
            description: ''
        },
    ];

    const insertedLocations:any = await LocationModel.bulkCreate(locations);


    const users = [
        {
            firstName: 'Jorge',
            lastName: 'Acosta',
            dni: '23616110',
            // birthDate,
            phone: '2646730581',
            email: 'jorgeacostadeleon@yahoo.com',
            password: '123456',
            active: true,
            role: 'user',
        },
    ]


    const insertedUsers:any = await UserModel.bulkCreate(users);

    // Registros de movimientos de inventario
    // const inventoryMovement:any = [
    //     {
    //         movementType: 'entrada',
    //         quantity: 10,
    //         articleId: insertedArticles[0].id,
    //         originLocationId: insertedLocations[1].id,
    //         destinationLocationId: insertedLocations[0].id
    //     },
    //     {
    //         movementType: 'transferencia',
    //         quantity: 2,
    //         articleId: insertedArticles[0].id,
    //         originLocationId: insertedLocations[0].id,
    //         destinationLocationId: insertedLocations[3].id
    //     },
    //     {
    //         movementType: 'transferencia',
    //         quantity: 3,
    //         articleId: insertedArticles[0].id,
    //         originLocationId: insertedLocations[0].id,
    //         destinationLocationId: insertedLocations[4].id
    //     },
    //     {
    //         movementType: 'transferencia',
    //         quantity: 1,
    //         articleId: insertedArticles[0].id,
    //         originLocationId: insertedLocations[3].id,
    //         destinationLocationId: insertedLocations[5].id
    //     },
    // ];

    // const insertedInventoryMovements:any = await InventoryMovementModel.bulkCreate(inventoryMovement);


    

    // Inventory


      
    // console.log("Registros de artículo insertados correctamente:", insertedArticles);
    // console.log("Registros de locaciones insertados correctamente:", insertedLocations);
    // console.log("Registros de movimientos insertados correctamente:", insertedInventoryMovements);

};

export default dataBase;
