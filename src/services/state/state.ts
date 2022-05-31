import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";

export interface State {
    giphs: {
        items: BasicGiphInfo[];
        selectedItem: DetailedGiphInfo | null;
        totalItemCount: number;
        page: number;
        pageSize: number;
        pageCount: number;
        search: string;
        searchHistory: string[];
    },
    isLoading: boolean;
}
