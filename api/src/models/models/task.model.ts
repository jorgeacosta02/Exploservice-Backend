import { model, Schema, Document, Types} from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    date: Date;
    user: Types.ObjectId
}

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'ESUser',
        required: true
    }
}, {
    timestamps: true
});


export default model<ITask>('Task', taskSchema);