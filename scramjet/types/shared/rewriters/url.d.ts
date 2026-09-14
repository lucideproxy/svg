import { ScramjetContext } from "@/shared";
import { _URL } from "../snapshot";
export type NavigationType = "user" | "link" | "location";
export type RewriteUrlOptions = {
    referrerPolicy?: string;
    isModule?: boolean;
    navigateType?: NavigationType;
    topFrame?: string;
    parentFrame?: string;
    isIframe?: string;
    mode?: string;
    credentials?: string;
    destination?: RequestDestination;
};
export type URLMeta = {
    origin: _URL;
    base: _URL;
    topFrameName?: string;
    parentFrameName?: string;
    referrerPolicy?: string;
};
export declare function rewriteBlob(url: string, context: ScramjetContext, meta: URLMeta): string;
export declare function unrewriteBlob(url: string, context: ScramjetContext, _meta: URLMeta): string;
export declare function rewriteUrl(url: string | URL, context: ScramjetContext, meta: URLMeta, options?: RewriteUrlOptions): string;
export declare function unrewriteUrl(url: string | URL, context: ScramjetContext): string;
