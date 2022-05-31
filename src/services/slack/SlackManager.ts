import { ISlackManager } from "./ISlackManager";

export class SlackManager implements ISlackManager
{
    constructor(private readonly teamId, private readonly channelId)
    {
    }

    public openInSlack(): void
    {
        window.location.href = `slack://channel?team=${this.teamId}&id=${this.channelId}`;
    }
}