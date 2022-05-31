import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { IStateManager } from "./IStateManager";
import { State } from "./state";
import { clearSearchHistory, selectGiph, setGiphs, setIsLoading } from "./storeMutations";
import { Store } from "vuex";

export class StateManager implements IStateManager
{
    constructor(private readonly store: Store<State>)
    {
    }

    public get state(): State
    {
        return this.store.state;
    }

    public clearSearchHistory(): void
    {
        this.store.commit(clearSearchHistory);
    }

    public selectGiph(giph: DetailedGiphInfo | null): void
    {
        this.store.commit(selectGiph, giph);
    }

    public setGiphs(items: BasicGiphInfo[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string): void
    {
        this.store.commit(setGiphs, {
            items, totalItemCount, page, pageSize, pageCount, search
        });
    }

    public setIsLoading(isLoading: boolean): void
    {
        document.body.style.cursor = isLoading ? "progress" : "default";

        this.store.commit(setIsLoading, isLoading);
    }
}
