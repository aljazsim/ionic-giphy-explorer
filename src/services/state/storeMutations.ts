import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { State } from "./state";
import { MutationTree } from "vuex";

export const clearSearchHistory = "clearSearchHistory";
export const selectGiph = "selectGiph";
export const setGiphs = "setGiphs";
export const setIsLoading = "setIsLoading";

export const mutations = <MutationTree<State>>{
    [clearSearchHistory](state: State): void {
        state.giphs.searchHistory = [];
    },
    [setIsLoading](state: State, isLoading: boolean): void {
        state.isLoading = isLoading;
    },
    [setGiphs](state: State, data: { items: BasicGiphInfo[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string }): void {
        state.giphs.items = data.items;
        state.giphs.totalItemCount = data.totalItemCount;
        state.giphs.page = data.page;
        state.giphs.pageSize = data.pageSize;
        state.giphs.pageCount = data.pageCount;
        state.giphs.search = data.search;
        state.giphs.searchHistory = state.giphs.searchHistory.concat([data.search.toLowerCase()]).filter((value, index, self) => self.indexOf(value) === index).filter(value => value?.length > 0).sort();
    },
    [selectGiph](state: State, giph: DetailedGiphInfo | null): void {
        state.giphs.selectedItem = giph;
    }
};
