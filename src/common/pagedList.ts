export class PagedList<T> {
    constructor(
        public readonly totalItemCount: number,
        public readonly items: T[],
        public readonly page: number,
        public readonly pageSize: number,
        public readonly pageCount: number) {
    }
}
