import { Configuration, OpenAIApi } from 'openai';

export enum ImageSize {
    SMALL = "256x256",
    MEDIUM = "512x512",
    LARGE = "1024x1024"
}

function getOpenAIObject(apiKey: string) {
    const configuration = new Configuration({
        apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);
    return openai
}

export async function generateImage(prompt: string, apiKey: string, imageSize: ImageSize): Promise<string> {
    console.log("Generating image...")
    const openai = getOpenAIObject(apiKey)

    try{
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: imageSize
        })
        console.log("**Generate_image response**")
        console.log(response.data)
        const image_url = response.data.data[0].url
        return image_url as string
    }
    catch(error){
        console.log("Error generating image")
        console.log(error)
        return error as string
    }        
}