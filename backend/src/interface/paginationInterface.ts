import { DataQuery } from "./dataQueryInterface";


export interface PaginationOptions {
    limit: number;
    offset: number;
    filterQuery: DataQuery
}