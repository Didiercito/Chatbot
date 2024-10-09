import 'dotenv/config'
import BotWhatsapp from '@bot-whatsapp/bot'
import provider from './provider'
import database from './database'
import flow from './flow'

const main = async () => {
 
    await BotWhatsapp.createBot({
        database,
        flow: flow,
        provider
    })

}


main()