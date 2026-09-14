import { ScramjetFetchHandler, ScramjetFetchParsed, ScramjetFetchRequest } from ".";
export declare const QP: {
    readonly referrerPolicy: "$rfp";
    readonly referrerSource: "$rfs";
    readonly isModule: "$module";
    readonly topFrame: "$tf";
    readonly parentFrame: "$pf";
    readonly isIframe: "$iframe";
    readonly mode: "$mode";
    readonly credentials: "$cred";
    readonly destination: "$dest";
    readonly initiatorOrigin: "$io";
    readonly fetchSite: "$fs";
    readonly crossSiteRedirect: "$csr";
    readonly fakeDataURL: "$fakedataurl";
};
export type QueryParamKey = keyof typeof QP;
export type QueryParams = Partial<Record<QueryParamKey, string>>;
export declare function parseQueryParams(searchParams: URLSearchParams): {
    params: QueryParams;
    extras: Record<string, string>;
};
export declare function parseRequest(request: ScramjetFetchRequest, handler: ScramjetFetchHandler): ScramjetFetchParsed;
