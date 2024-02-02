// index.ts
import { sequelize } from './db';
import User from './models/User';
import Project from './models/Project';

// Sincronizar los modelos con la base de datos (esto creará las tablas si no existen)
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synchronized.');
    // Puedes comenzar a usar tus modelos aquí
  })
  .catch((err) => console.error('Error synchronizing the database:', err));








// INDEX VIEJO CON MONGODB

// import app from './app';
// import './db';


// app.listen(app.get('port'), () => {
//     console.log(`Server listening on port ${app.get('port')}`);
// });
