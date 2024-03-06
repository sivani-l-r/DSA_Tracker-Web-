import express from 'express';
import { Question } from '../models/questionModel.js';


const router = express.Router();



// Route to save a new question
router.post('/', async (request, response) =>
{
    try{
        if(
            !request.body.questionText ||
            !request.body.questionType
        )
        {
            return response.status(400).send(
                {
                    message: 'Send all required fields: questionText,questionType',
                }
            );
        }

        const newQuestion =
        {
            questionText : request.body.questionText,
            questionType: request.body.questionType
        };

        const question = await Question.create(newQuestion);
        return response.status(201).send(question);

    }
    catch(error)
    {
        console.log(error.message);
        response.status(500);
    }
});


// Route to get books from database
router.get('/all', async (request, response) =>
{
    try{
        const questions = await Question.find({});

        return response.status(200).json(
            {
                count: questions.length,
                data: questions
            }
        );

    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
});

router.get('/array', async (request, response) => {
    try {
        const arrayQuestions = await Question.find({ questionType: "Array" }); // Modify this line to filter by questionType

        return response.status(200).json(
            {
                count: arrayQuestions.length,
                data: arrayQuestions
            }
        );

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/stack', async (request, response) => {
    try {
        const stackQuestions = await Question.find({ questionType: "Stack" }); 

        return response.status(200).json(
            {
                count: stackQuestions.length,
                data: stackQuestions
            }
        );

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Search Functionality Route to get questions containing a specific word in their text
router.get('/all/:word', async (request, response) => {
    try {
        const { word } = request.params;
        const regex = new RegExp(word, 'i'); // 'i' flag for case-insensitive search
        const questions = await Question.find({ questionText: { $regex: regex } });

        return response.status(200).json(questions);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});




// Route for Update a Question
router.put('/all/:id', async (request, response) => {
    try {
      if (
        !request.body.questionText ||
        !request.body.questionType
      
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = request.params;
  
      const result = await Question.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Question not found' });
      }
  
      return response.status(200).send({ message: 'Question updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route for Delete a question
  router.delete('/all/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Question.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Question not found' });
      }
  
      return response.status(200).send({ message: 'Question deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


  export default router;