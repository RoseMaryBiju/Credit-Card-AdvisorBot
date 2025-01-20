// creation for our UI

import { createChatBotMessage } from "react-chatbot-kit";
const config = {
    botName : 'CardAdvisor',
    initialMessages : [
        createChatBotMessage("Hello I am a credit card advisor. How can I help you")
    ]

}

export default config;