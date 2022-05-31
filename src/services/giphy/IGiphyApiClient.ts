import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { PagedList } from "../../common/pagedList";

export interface IGiphyApiClient {
    downloadFile(url: string, fileName: string): Promise<void>;
    getBlob(url: string): Promise<Blob>;
    getGiphDetails(giphId: string): Promise<DetailedGiphInfo>;
    searchGiphs(searchKeywords: string, page: number, pageSize: number): Promise<PagedList<BasicGiphInfo>>;
}
