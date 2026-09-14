import { RpcHelper } from "@mercuryworkshop/rpc";
import { type ProxyTransport } from "@mercuryworkshop/proxy-transports";
import { ScramjetFetchHandler, type CookieSyncOptions, type FetchHooks, type ScramjetConfig, type ScramjetContext, Plugin } from "@mercuryworkshop/scramjet";
import type { FrameInitHooks, SerializedCookieSyncEntry, Controllerbound, SWbound, FrameErrorHooks } from "./types";
export { VERSION } from "./version";
export { assertRuntimeScramjetVersion } from "./version";
export type Config = {
    prefix: string;
    scramjetPath: string;
    injectPath: string;
    wasmPath: string;
    virtualWasmPath: string;
    codec: Record<"encode" | "decode", (input: string) => string>;
};
export declare const config: Config;
export declare class ManagedPlugin extends Plugin {
    frame: Frame;
    dependencies: string[];
    constructor(name: string, dependencies: string[]);
    install(frame: Frame): void;
}
type ControllerInit = {
    serviceworker: ServiceWorker;
    transport: ProxyTransport;
    config?: Partial<Config>;
    scramjetConfig?: Partial<ScramjetConfig>;
};
type FrameOptions = {
    plugins: ManagedPlugin[];
};
export declare class Controller {
    init: ControllerInit;
    id: string;
    config: Config;
    scramjetConfig: ScramjetConfig;
    prefix: string;
    cookieJar: any;
    frames: Frame[];
    serviceWorkerController: ServiceWorker;
    guardServiceWorkerRevive: boolean;
    private ready;
    private readyResolve;
    isReady: boolean;
    rpc: RpcHelper<Controllerbound, SWbound>;
    private port;
    transport: ProxyTransport;
    private cookieUpdatedAt;
    private cookieSyncPromise;
    private cookieSyncDirty;
    private cookieSyncChannel;
    private wasmAlreadyFetched;
    private wasmPayload;
    private onTabChannelMessage;
    private onCookieSyncMessage;
    private loadScramjetWasm;
    private methods;
    constructor(init: ControllerInit);
    private setupMessagePort;
    private applyCookieSyncEntries;
    propagateCookieSync(cookies: SerializedCookieSyncEntry[], options?: CookieSyncOptions): Promise<void>;
    private loadSavedCookies;
    persistCookies(): Promise<void>;
    setTransport(transport: ProxyTransport): void;
    createFrame(element?: HTMLIFrameElement, options?: FrameOptions): Frame;
    wait(): Promise<void>;
}
export declare class Frame {
    controller: Controller;
    element: HTMLIFrameElement;
    options: FrameOptions;
    id: string;
    prefix: string;
    fetchHandler: ScramjetFetchHandler;
    hooks: {
        fetch: FetchHooks;
        init: FrameInitHooks;
        error: FrameErrorHooks;
    };
    get context(): ScramjetContext;
    plugins: ManagedPlugin[];
    constructor(controller: Controller, element: HTMLIFrameElement, options?: FrameOptions);
    getPlugin<T extends ManagedPlugin>(name: string): T;
    back(): void;
    forward(): void;
    reload(): void;
    go(url: string): void;
}
