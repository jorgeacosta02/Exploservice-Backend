import { model, Schema, Document} from "mongoose";
// import bcrypt from 'bcrypt';

export interface IUser extends Document {
    email: string;
    password: string;
    id: string
    // comparePassword: (password:string) => Promise<boolean>;
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        require: true 
    },id: {
        type: string
    }
});

// Este método se ejecuta antes de guardar el dato
// Uso una función de ES5 para mantener el scope
// Este es el método para establecer un hash (contraseña cifrada) en caso de que sea una carga nueva.

// userSchema.pre<IUser>('save', async function (next) {
//     const user = this;
//     if(!user.isModified('password')) return next()

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(user.password, salt);
//     user.password = hash;
//     next();
// });

// Acá se crea un método para comparar la contraseña que llega con el hash guardado.

// userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
//     return await bcrypt.compare(password, this.password);
// }

export default model<IUser>('User', userSchema);