import axios from "axios";

export async function translateEffect(text) {

    const req = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data.responseData.translatedText
        } catch (error) {
            console.error(error);
        }
    };
    const response = await req(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|pt-br`)

    return response

};
