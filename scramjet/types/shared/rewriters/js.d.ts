import { ScramjetContext } from "@/shared";
import { URLMeta } from "@rewriters/url";
type RewriterResult = {
    js: string | Uint8Array;
    map: Uint8Array | null;
    tag: string;
    errors: string[];
};
export declare function rewriteJsInner(js: string | Uint8Array, url: string | null, context: ScramjetContext, meta: URLMeta, isModule?: boolean): RewriterResult;
export declare function rewriteJs(js: string | Uint8Array, url: string | null, context: ScramjetContext, meta: URLMeta, isModule?: boolean): string | Uint8Array;
export {};
