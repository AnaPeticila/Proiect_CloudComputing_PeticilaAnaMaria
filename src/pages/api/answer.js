import { sendBadRequest, sendMethodNotAllowed, sendOk } from "../../../utils/apiMethods";
import openai from "../../../lib/openai";

const MAX_MEMORY = 5;

const SYSTEM_PROMPTS = {
    SIMPLE_ASSISTANT: {
        MESSAGE: {
            'role': 'system',
            'content': 'You are a simple assistant. You respond with simple sentences.',
        },
        TEMPERATURE: 1,
        MAX_TOKENS: 50,
        TYPE: 'simple_assistant',
    },
    USER: {
        MESSAGE: {
            'role': 'user',
            'content': 'You are a user. You respond with normal sentences.',
        },
        TEMPERATURE: 1,
        MAX_TOKENS: 100,
        TYPE: 'user',
    },
};

const chatCompletion = async (messages, maxTokens, temperature) => {
    const rawResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        max_tokens: maxTokens,
        temperature: temperature,
        messages: messages,

    })

    return rawResponse?.choices[0];
}


const converseChat = async (res, messages, role) => {
    try {

        let newMessages = [];

        if (messages.length > MAX_MEMORY) {
            newMessages = messages.slice(-MAX_MEMORY);
        }
        else {
            newMessages = messages;
        }

        const messagesArray = [
            role.MESSAGE,
            ...newMessages
        ];

        const response = await chatCompletion(messagesArray, role.MAX_TOKENS, role.TEMPERATURE);

        return sendOk(res, response);
    }
    catch (error) {
        console.error(error);
    }
}

const converse = (res, messages, type) => {
    switch (type) {
        case SYSTEM_PROMPTS.SIMPLE_ASSISTANT.TYPE:
            return converseChat(res, messages, SYSTEM_PROMPTS.SIMPLE_ASSISTANT);
        case SYSTEM_PROMPTS.USER.TYPE:
            return converseChat(res, messages, SYSTEM_PROMPTS.USER);
        default:
            return sendBadRequest(res, 'Wrong Conversation type!');
    }
}


export default async function handler(req, res) {
    const { method, body } = req;

    const isAllowedMethods = req.method === 'POST';

    if (!isAllowedMethods) {
        return sendMethodNotAllowed(res, "Method not allowed");
    }

    const { messages, type } = body;

    if (!messages || !type) {
        return sendBadRequest(res, 'Bad request');
    }
    try {
        return converse(res, messages, type);

    } catch (error) {
        console.log(error);

    }
}