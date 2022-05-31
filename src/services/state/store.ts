import { State } from "./state";
import { mutations } from "./storeMutations";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export const store: Store<State> = createStore<State>({
    state: {
        isLoading: false,
        giphs: {
            totalItemCount: 0,
            items: [],
            selectedItem: null,
            page: 1,
            pageCount: 0,
            pageSize: 5,
            search: "",
            searchHistory: []
        }
    },
    mutations: mutations
});

export const key: InjectionKey<Store<State>> = Symbol("store");

export function useStore(): Store<State>
{
    return baseUseStore(key);
}
