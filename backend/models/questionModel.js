import mongoose from 'mongoose';

const questionSchema = mongoose.Schema(
    {
    questionText: {
        type: String,
        required: true,
    },
    questionType: {
        type: String,
        required: true,    
    }

},
{
    timestamps: true,
}
);

export const Question = mongoose.model('Question',questionSchema);