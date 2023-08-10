import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv';
//import { Configuration, OpenAIApi } from "../node_modules/openai";
//import * as dotenv from '../node_modules/dotenv';
dotenv.config();

export async function fetchOpenAIResponse(reponse) {
    const configuration = new Configuration({
        
        /*apiKey: process.env.OPENAI_API_KEY,*/
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: reponse }],
        });

        console.log(completion.data.choices[0].message);
        return completion.data.choices[0].message;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Llamar a la función principal
fetchOpenAIResponse("hola");
