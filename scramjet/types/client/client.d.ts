import { BareCompatibleClient, ProxyTransport, RawHeaders } from "@mercuryworkshop/proxy-transports";
import { LifecycleHooks } from "@client/events";
import { RewriteUrlOptions, type URLMeta } from "@rewriters/url";
import { HtmlRewriterHooks, ScramjetContext, ScramjetHeaders } from "@/shared";
import { SingletonBox } from "./singletonbox";
import { ScramjetConfig } from "@/types";
import { type CookieSyncEntry, type CookieSyncOptions, TrackedHistoryState } from "@/fetch";
import { AnyFunction } from "@/types";
import { _URL } from "@/shared/snapshot";
type IfEquals<T, U, Y = unknown, N = never> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? Y : N;
type Traverse<O extends Record<any, any>, P extends string> = P extends `${infer K}.${infer R}` ? Traverse<O[K], R> : O[P];
type GlobalTraverse<P extends string> = Traverse<GlobalThis & Record<string, any>, P>;
type ProxyApplyThis<T extends string> = unknown extends ThisParameterType<Extract<GlobalTraverse<T>, AnyFunction>> ? T extends `${infer ClassName}.prototype.${string}` ? GlobalTraverse<ClassName> extends {
    prototype: infer Proto;
} ? Proto : unknown : unknown : ThisParameterType<Extract<GlobalTraverse<T>, AnyFunction>>;
export type ScramjetClientInit = {
    context: ScramjetContext;
    transport: ProxyTransport;
    sendSetCookie: (cookies: CookieSyncEntry[], options?: CookieSyncOptions) => Promise<void>;
    shouldBlockMessageEvent?: (ev: MessageEvent) => boolean;
    hookSubcontext: (self: Self, frame?: HTMLIFrameElement) => ScramjetClient;
    initHeaders: RawHeaders;
    history: TrackedHistoryState[];
};
type NativeStore = {
    store: Record<string, any>;
    construct: <T extends string>(target: T, ...args: ConstructorParameters<GlobalTraverse<T>>) => InstanceType<GlobalTraverse<T>>;
    call: <T extends string>(target: T, that: ProxyApplyThis<T>, ...args: Parameters<GlobalTraverse<T>>) => ReturnType<GlobalTraverse<T>>;
};
type DescriptorStore = {
    store: Record<string, PropertyDescriptor>;
    get: <T extends string>(target: T, that: any) => GlobalTraverse<T>;
    set: <T extends string>(target: T, that: any, value: GlobalTraverse<T>) => void;
};
export type ProxyCtx<T extends string = string, U extends "construct" | "apply" = "apply"> = {
    fn: GlobalTraverse<T>;
    this: IfEquals<U, "construct", null, ProxyApplyThis<T>>;
    args: IfEquals<U, "construct", ConstructorParameters<GlobalTraverse<T>>, Parameters<GlobalTraverse<T>>>;
    newTarget: IfEquals<U, "construct", GlobalTraverse<T>, null>;
    return: (r: IfEquals<U, "construct", InstanceType<GlobalTraverse<T>>, ReturnType<GlobalTraverse<T>>>) => void;
    call: () => IfEquals<U, "construct", InstanceType<GlobalTraverse<T>>, ReturnType<GlobalTraverse<T>>>;
};
export type Proxy<T extends string = string> = {
    construct?(ctx: ProxyCtx<T, "construct">): any;
    apply?(ctx: ProxyCtx<T, "apply">): any;
};
export type TrapCtx<T extends string> = {
    this: any;
    get: () => GlobalTraverse<T>;
    set: (v: GlobalTraverse<T>) => void;
};
export type Trap<T extends string> = {
    writable?: boolean;
    value?: any;
    enumerable?: boolean;
    configurable?: boolean;
    get?: (ctx: TrapCtx<T>) => GlobalTraverse<T>;
    set?: (ctx: TrapCtx<T>, v: GlobalTraverse<T>) => void;
};
export type ScramjetModule = {
    enabled: (client: ScramjetClient) => boolean | undefined;
    disabled: (client: ScramjetClient, self: GlobalThis) => void | undefined;
    order: number | undefined;
    default: (client: ScramjetClient, self: GlobalThis) => void;
};
export declare class ScramjetClient {
    global: GlobalThis;
    init: ScramjetClientInit;
    locationProxy: any;
    indirectEval: any;
    serviceWorker: ServiceWorkerContainer;
    bare: BareCompatibleClient;
    natives: NativeStore;
    descriptors: DescriptorStore;
    wrapfn: (i: any, ...args: any) => any;
    eventcallbacks: Map<any, [
        {
            event: string;
            originalCallback: AnyFunction;
            proxiedCallback: AnyFunction;
        }
    ]>;
    meta: URLMeta;
    box: SingletonBox;
    context: ScramjetContext;
    initHeaders: ScramjetHeaders;
    history: TrackedHistoryState[];
    private flagCache;
    hooks: {
        rewriter: {
            html: import("@/Tap").TapInstance<HtmlRewriterHooks>;
        };
        lifecycle: import("@/Tap").TapInstance<LifecycleHooks>;
    };
    constructor(global: GlobalThis, init: ScramjetClientInit);
    /** Apply document injection init when a client was already installed (e.g. early contentWindow). */
    syncDocumentInit(init: {
        initHeaders: RawHeaders;
        history: TrackedHistoryState[];
        cookies?: string;
    }): void;
    hook(): void;
    get url(): _URL;
    set url(url: _URL | string);
    Proxy<T extends string>(name: T, handler: Proxy<T>): void;
    Proxy<const T extends readonly string[]>(name: T, handler: Proxy<T[number]>): void;
    RawProxy(target: any, prop: string, handler: Proxy<any>, debugname?: string): void;
    Trap<T extends string>(name: T, handler: Trap<T>): void;
    Trap<const T extends readonly string[]>(name: T, handler: Trap<T[number]>): void;
    RawTrap(target: any, prop: string, descriptor: Trap<any>): void;
    rewriteUrl(url: string | URL, options?: RewriteUrlOptions): string;
    unrewriteUrl(url: string | URL): string;
    flagEnabled(flag: keyof ScramjetConfig["flags"]): boolean;
    get config(): ScramjetConfig;
}
export {};
