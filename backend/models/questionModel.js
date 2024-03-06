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
    },
    attempts:
    {
        type: Number,
        default: 0
    },
    questionNote:
    {
        type: String,
        default: ''

    }

},
{
    timestamps: true,
}
);

export const Question = mongoose.model('Question',questionSchema);