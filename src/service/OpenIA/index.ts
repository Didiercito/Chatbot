import OpenAI from "openai";
import dotenv from 'dotenv'
import { ChatCompletionMessageParam } from "openai/resources";
import { generatePrompt } from "./prompt";

dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})



const run = async (name: string, history: ChatCompletionMessageParam[]): Promise<string | null> => {
    const prompt = generatePrompt(name)
    console.log(`[PROMPT]:`, prompt)

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            {
                "role": "system",
                "content": generatePrompt(name)
            },
            ...history
        ],
        temperature: 1,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    })

    return response.choices[0].message.content
}

export { run }
