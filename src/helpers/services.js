import { fetchWrapper } from "./fetch-wrapper";
const baseUrl = `${process.env.VUE_APP_API_URL}/bots`;

export const createBot = async (botName, botDescription) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const bot = await fetchWrapper.post(`${baseUrl}/createBot`, {botName, botDescription, userId: user.user._id});
        if (bot.status) {
            return {error: false}
        } else {
            return {error: true, message: bot.message}
        }
    } catch (err) {
        return {error: true, message: err}
    }
}

export const createNode = async (body) => {
    try {
        //const user = JSON.parse(localStorage.getItem('user'));
        const bot = await fetchWrapper.post(`${baseUrl}/createNodes`, body);
        if (bot.status) {
            return {error: false}
        } else {
            return {error: true, message: bot.message}
        }
    } catch (err) {
        return {error: true, message: err}
    }
}

export const getBots = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
        const bot = await fetchWrapper.get(`${baseUrl}/getBotList/${user.user._id}`);
        return bot
    } catch (err) {
        return {error: true, message: err}
    }
}

export const getNodes = async (botId) => {
    //const user = JSON.parse(localStorage.getItem('user'));
    try {
        const bot = await fetchWrapper.get(`${baseUrl}/getNodes/${botId}`);
        return bot
    } catch (err) {
        return {error: true, message: err}
    }
}

export const getEdges = async (botId) => {
    //const user = JSON.parse(localStorage.getItem('user'));
    try {
        const bot = await fetchWrapper.get(`${baseUrl}/getEdges/${botId}`);
        return bot
    } catch (err) {
        return {error: true, message: err}
    }
}