import "reflect-metadata";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { IClipboardManager } from "../../services/clipboard/IClipboardManager";
import { IGiphyApiClient } from "../../services/giphy/IGiphyApiClient";
import { Icons } from "../../services/icons";
import { IRoutingManager } from "../../services/router/IRoutingManager";
import { ISlackManager } from "../../services/slack/ISlackManager";
import { IStateManager } from "../../services/state/IStateManager";
import { inject } from "inversify-props";
import { Vue } from "vue-class-component";

export default class GiphDetails extends Vue
{
    @inject() private readonly clipboardManager!: IClipboardManager;
    @inject() private readonly giphyApiClient!: IGiphyApiClient;
    @inject() private readonly routingManager!: IRoutingManager;
    @inject() private readonly slackManager!: ISlackManager;
    @inject() private readonly stateManager!: IStateManager;

    public readonly icons = new Icons();

    public get giph(): DetailedGiphInfo | null
    {
        return this.stateManager.state.giphs.selectedItem;
    }

    public get isLoading(): boolean
    {
        return this.stateManager.state.isLoading;
    }

    public async mounted(): Promise<void>
    {
        this.stateManager.setIsLoading(true);

        const giphId = this.routingManager.getGiphDetailsParams()?.giphId;

        if (giphId)
        {
            this.stateManager.selectGiph(await this.giphyApiClient.getGiphDetails(giphId));
        }

        this.stateManager.setIsLoading(false);

        if (!this.giph)
        {
            this.onGoBack();
        }
    }

    public async onCopy(giph: DetailedGiphInfo): Promise<void>
    {
        await navigator.clipboard.writeText(giph.url);
    }

    public onGoBack(): void
    {
        this.routingManager.goToGiphSearch();
    }

    public async onOpenInSlack(giph: DetailedGiphInfo): Promise<void>
    {
        const data = await fetch(giph.url);
        const blob = await data.blob();

        await this.clipboardManager.copy(blob);

        this.slackManager.openInSlack();
    }

    public async onSave(giph: DetailedGiphInfo): Promise<void>
    {
        this.stateManager.setIsLoading(true);

        await this.giphyApiClient.downloadFile(giph.url, `${giph.title}.${giph.type}`);

        this.stateManager.setIsLoading(false);
    }
}
