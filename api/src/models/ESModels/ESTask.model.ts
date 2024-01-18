import { model, Schema, Document} from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    date: Date;
}

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        require: true 
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
});


export default model<ITask>('ESTask', taskSchema);