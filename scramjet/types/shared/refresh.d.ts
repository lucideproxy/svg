export type ParsedDeclarativeRefresh = {
    time: number;
    urlStart: number;
    urlEnd: number;
    url: string | null;
};
export declare function parseDeclarativeRefresh(input: string): ParsedDeclarativeRefresh | null;
