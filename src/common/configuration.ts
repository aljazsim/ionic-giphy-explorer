export interface Configuration
{
    giphy: {
        apiBaseUrl: string,
        apiKey: string
    }
}

export function getConfiguration(): Configuration
{
    return {
        giphy: {
            apiBaseUrl: process.env.VUE_APP_GIPHY_API_BASE_URL ?? "",
            apiKey: process.env.VUE_APP_GIPHY_API_KEY ?? ""
        }
    };
}
