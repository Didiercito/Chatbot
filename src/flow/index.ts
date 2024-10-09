import BotWhatsapp from '@bot-whatsapp/bot'
import helloFlow from './hello.flow'
import welcomeFlow from './welcome.flow'

export default BotWhatsapp.createFlow(
    [
        helloFlow,
        welcomeFlow
    ]
)