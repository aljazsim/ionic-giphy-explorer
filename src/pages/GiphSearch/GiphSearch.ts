import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { IGiphyApiClient } from "../../services/giphy/IGiphyApiClient";
import { Icons } from "../../services/icons";
import { IRoutingManager } from "../../services/router/IRoutingManager";
import { IStateManager } from "../../services/state/IStateManager";
import { inject } from "inversify-props";
import { Observable, Observer, Subject } from "rxjs";
import { Vue } from "vue-class-component";

export default class GiphSearch extends Vue
{
    @inject() private readonly giphyApiClient!: IGiphyApiClient;
    @inject() private readonly routingManager!: IRoutingManager;
    @inject() private readonly stateManager!: IStateManager;

    public readonly clearedObserver: Observer<void> = new Subject<void>();
    public readonly icons = new Icons();

    public showSearchHistory = false;

    public get canSeeSearchHistory(): boolean
    {
        return !this.isLoading && this.searchHistory?.length > 0;
    }

    public get cleared(): Observable<void>
    {
        return this.clearedObserver as Subject<void>;
    }

    public get giphs(): BasicGiphInfo[]
    {
        return this.stateManager.state.giphs.items;
    }

    public get isLoading(): boolean
    {
        return this.stateManager.state.isLoading;
    }

    public get itemCount(): number
    {
        return this.stateManager.state.giphs.items?.length;
    }

    public get searchHistory(): string[]
    {
        return this.stateManager.state.giphs.searchHistory;
    }

    public get searchHistoryButtons(): any[]
    {
        const searchHistoryButtons: any[] = [];

        for (const searchHistoryItem of this.searchHistory ?? [])
        {
            searchHistoryButtons.push({
                text: searchHistoryItem,
                icon: this.icons.search,
                handler: () => this.onSearch(searchHistoryItem)
            });
        }

        searchHistoryButtons.push({
            text: "Clear history",
            role: "destructive",
            icon: this.icons.clear,
            handler: () => this.onClearSearchHistory()
        });

        return searchHistoryButtons;
    }

    public get searchKeywords(): string
    {
        return this.stateManager.state.giphs.search;
    }

    public get totalItemCount(): number
    {
        return this.stateManager.state.giphs.totalItemCount;
    }

    public mounted(): void
    {
        window.addEventListener("keydown", this.onKeyDown);
    }

    public onClear(): void
    {
        this.stateManager.setIsLoading(true);
        this.stateManager.setGiphs([], 0, 1, this.stateManager.state.giphs.pageSize, 0, "");
        this.stateManager.setIsLoading(false);

        this.clearedObserver.next();
    }

    public onClearSearchHistory(): void
    {
        this.stateManager.clearSearchHistory();
    }

    public async onLoadMore(): Promise<void>
    {
        this.stateManager.setIsLoading(true);

        const searchKeywords = this.stateManager.state.giphs.search;
        const page = this.stateManager.state.giphs.page + 1;
        const pageSize = this.stateManager.state.giphs.pageSize;
        const giphs = await this.giphyApiClient.searchGiphs(searchKeywords, page, pageSize);
        const items = this.stateManager.state.giphs.items.concat(giphs.items);

        this.stateManager.setGiphs(items, giphs.totalItemCount, page, giphs.pageSize, giphs.pageCount, searchKeywords);
        this.stateManager.setIsLoading(false);
    }

    public async onSearch(searchKeywords: string): Promise<void>
    {
        if (searchKeywords !== this.searchKeywords)
        {
            this.stateManager.setIsLoading(true);

            const page = 1;
            const pageSize = this.stateManager.state.giphs.pageSize;
            const giphs = await this.giphyApiClient.searchGiphs(searchKeywords, page, pageSize);

            this.stateManager.setGiphs(giphs.items, giphs.totalItemCount, giphs.page, giphs.pageSize, giphs.pageCount, searchKeywords);
            this.stateManager.setIsLoading(false);
        }
    }

    public onSelect(giph: BasicGiphInfo): void
    {
        this.stateManager.selectGiph(null);
        this.routingManager.goToGiphDetails(giph);
    }

    public unmounted(): void
    {
        window.removeEventListener("keydown", this.onKeyDown);
    }

    private onKeyDown(event: KeyboardEvent): void
    {
        if (event.key === "Escape")
        {
            this.onClear();
        }
    }
}
