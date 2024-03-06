import { ArticleModel } from "../models/articleModel";
import { InventoryModel } from "../models/inventoryModel";
import { InventoryMovementModel } from "../models/inventoryMovementModel";
import { LocationModel } from "../models/locationModel";

const dataBase = async () => {



    // Registros de artículos
    const articles = [
        {
            name: 'Barra T45',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Barra T38',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Barra T51',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Broca T45',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Broca T51',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Broca T38',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
    ];

    const insertedArticles:any = await ArticleModel.bulkCreate(articles);



    // Registros de locaciones
    const locations = [
        {
            name: 'Central',
            description: 'Albardón' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Prveedor',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Descarte',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Tocota',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'Barker',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
        {
            name: 'La Garrapata',
            description: '' // Aquí debería ser 'description' en lugar de 'Description'
        },
    ];

    const insertedLocations:any = await LocationModel.bulkCreate(locations);



    // Registros de movimientos de inventario
    const inventoryMovement:any = [
        {
            movementType: 'entrada',
            quantity: 10,
            articleId: insertedArticles[0].id,
            originLocationId: insertedLocations[1].id,
            destinationLocationId: insertedLocations[0].id
        },
        {
            movementType: 'transferencia',
            quantity: 2,
            articleId: insertedArticles[0].id,
            originLocationId: insertedLocations[0].id,
            destinationLocationId: insertedLocations[3].id
        },
        {
            movementType: 'transferencia',
            quantity: 3,
            articleId: insertedArticles[0].id,
            originLocationId: insertedLocations[0].id,
            destinationLocationId: insertedLocations[4].id
        },
        {
            movementType: 'transferencia',
            quantity: 1,
            articleId: insertedArticles[0].id,
            originLocationId: insertedLocations[3].id,
            destinationLocationId: insertedLocations[5].id
        },
    ];

    const insertedInventoryMovements:any = await InventoryMovementModel.bulkCreate(inventoryMovement);


    

    // Inventory


      
    // console.log("Registros de artículo insertados correctamente:", insertedArticles);
    // console.log("Registros de locaciones insertados correctamente:", insertedLocations);
    // console.log("Registros de movimientos insertados correctamente:", insertedInventoryMovements);

};

export default dataBase;
