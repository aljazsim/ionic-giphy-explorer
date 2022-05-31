export interface Configuration
{
    giphy: {
        apiBaseUrl: string,
        apiKey: string
    },
    slack: {
        teamId: string,
        channelId: string
    }
}

export function getConfiguration(): Configuration
{
    return {
        giphy: {
            apiBaseUrl: process.env.VUE_APP_GIPHY_API_BASE_URL ?? "",
            apiKey: process.env.VUE_APP_GIPHY_API_KEY ?? ""
        },
        slack: {
            teamId: process.env.VUE_APP_SLACK_TEAM_ID ?? "",
            channelId: process.env.VUE_APP_SLACK_CHANNEL_ID ?? ""
        }
    };
}
