import { URLMeta } from "@rewriters/url";
import { ScramjetContext } from "@/shared";
import { RawHeaders } from "@mercuryworkshop/proxy-transports";
import { TrackedHistoryState } from "@/fetch";
export type ForeignContext = "svg" | "math" | "html";
export type HtmlContext = {
    loadScripts: boolean;
    inline: boolean;
    source: string;
    apisource?: string;
    headers?: RawHeaders;
    foreignContext?: ForeignContext;
    history?: TrackedHistoryState[];
};
export declare class IncrementalHtmlRewriter {
    private readonly context;
    private readonly meta;
    private readonly htmlcontext;
    private readonly handler;
    private readonly parser;
    private readonly completedElements;
    private readonly emittedLengths;
    private readonly rewrittenNodes;
    private ended;
    constructor(context: ScramjetContext, meta: URLMeta, htmlcontext: HtmlContext);
    write(html: string): string;
    end(html?: string): string;
    private flush;
    private getAvailableOutput;
}
export declare function rewriteHtml(html: string, context: ScramjetContext, meta: URLMeta, htmlcontext: HtmlContext): string;
export declare function unrewriteHtml(html: string, foreignContext?: ForeignContext): string;
export declare function rewriteSrcset(srcset: string, context: ScramjetContext, meta: URLMeta): string;
