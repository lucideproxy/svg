import { ScramjetConfig, ScramjetFlags } from "@/types";
import DomHandler, { Element } from "domhandler";
import { URLMeta } from "@rewriters/url";
import { CookieJar } from "./cookie";
import { TapInstance } from "@/Tap";
import { HtmlContext } from "@/shared/rewriters/html";
export * from "./cookie";
export * from "./headers";
export * from "./htmlRules";
export * from "./mime";
export * from "./rewriters";
export declare function flagEnabled(flag: keyof ScramjetFlags, context: ScramjetContext, url: URL): boolean;
export type ScramjetInterface = {
    codecEncode: (input: string) => string;
    codecDecode: (input: string) => string;
    getInjectScripts(meta: URLMeta, handler: DomHandler, htmlcontext: HtmlContext, script: (src: string) => Element): Element[];
    getWorkerInjectScripts?(meta: URLMeta, isModule: boolean, script: (src: string) => string): string;
};
export type ScramjetContext = {
    config: ScramjetConfig;
    prefix: URL;
    interface: ScramjetInterface;
    cookieJar: CookieJar;
    hooks?: {
        rewriter: {
            html: TapInstance<HtmlRewriterHooks>;
        };
    };
};
export type HtmlRewriterHooks = {
    pre: {
        context: {
            handler: DomHandler;
            meta: URLMeta;
            origHtml: string;
            htmlcontext: HtmlContext;
        };
    };
    post: {
        context: {
            handler: DomHandler;
            meta: URLMeta;
            origHtml: string;
            htmlcontext: HtmlContext;
        };
        props: {
            setRawHtml?: string;
        };
    };
};
