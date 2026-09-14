import { URLMeta } from "@rewriters/url";
import { ScramjetContext } from "@/shared";
export declare function rewriteCss(css: string, context: ScramjetContext, meta: URLMeta): string;
export declare function unrewriteCss(css: string, context: ScramjetContext): string;
