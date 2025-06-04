import { Schema, model } from 'mongoose';

const imageSchema = new Schema({
    uploaderId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    imagePath: {
        type: String,
        required: true
    },
    metadata: {
        type: Object,
        default: {}
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Image = model('Image', imageSchema);

export default Image;