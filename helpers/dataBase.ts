import { ArticleModel } from "../src/models/articleModel";
import { InventoryModel } from "../src/models/inventoryModel";
import { InventoryMovementModel } from "../src/models/inventoryMovementModel";
import { LocationModel } from "../src/models/locationModel";

const dataBase = async () =>{
    let articles = [
        {
            name: 'Barra T45',
            Description: ''
        },
        {
            name: 'Barra T38',
            Description: ''
        },
        {
            name: 'Barra T51',
            Description: ''
        },
        {
            name: 'Broca T45',
            Description: ''
        },
        {
            name: 'Broca T51',
            Description: ''
        },
        {
            name: 'Broca T38',
            Description: ''
        },
    ]
    const article = await ArticleModel.bulkCreate(articles);
}

export default dataBase