import Prismic from "prismic-javascript";

export const apiEndpoint = "https://blogwebsites.cdn.prismic.io/api/v2";

export const accessToken = "";

// Creating a prismic client object

export const Client = (req = null) => 
    Prismic.client(apiEndpoint,createClientOptions(req,accessToken))
    const createClientOptions = (req,) => {
        const createClientOptions = (req = null, prismicAccessToken = null) => {
            const reqOption = req ? { req } : {};
            const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
            return {
                ...reqOption,
                ...accessTokenOption,
            }
        }
    }

