import { ArticleModel } from "../models/articleModel";
import { InventoryModel } from "../models/inventoryModel";
import { InventoryMovementModel } from "../models/inventoryMovementModel";
import { LocationModel } from "../models/locationModel";

const dataBase = async () => {
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
    const location = [
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

    try {
        const insertedArticles = await ArticleModel.bulkCreate(articles);
        const insertedLocations = await LocationModel.bulkCreate(location);
        console.log("Registros de artículo insertados correctamente:", insertedArticles);
        console.log("Registros de locaciones insertados correctamente:", insertedLocations);
    } catch (error) {
        console.error("Error al insertar registros de artículo:", error);
    }
};

export default dataBase;
