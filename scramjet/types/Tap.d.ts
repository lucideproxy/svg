type Description = {
    context?: object;
    props?: object;
};
type Callback<T extends Description> = (context: T["context"], props: T["props"]) => void | Promise<void>;
export type TapOrder = {
    /** Run before these plugins. */
    before?: readonly string[];
    /** Run after these plugins. */
    after?: readonly string[];
};
type CallbackInfo<T extends Description> = {
    callback: Callback<T>;
    plugin: Plugin;
    order: TapOrder;
};
type InternalHookDescription = {
    tap: TapInternal;
    key: string;
};
type TapInternal = {
    callbacks: Record<string, CallbackInfo<Description>[]>;
};
export type TapInstance<T extends Record<string, Description>> = {
    [K in keyof T]: T[K] & InternalHookDescription;
};
export declare class Plugin {
    name: string;
    readonly tapOrder: TapOrder;
    constructor(name: string, tapOrder?: TapOrder);
    tap<T extends Description>(hook: T, callback: Callback<T>, order?: TapOrder): void;
}
export declare class Tap {
    static dispatch<T extends Description>(hook: T, context: T["context"], props: T["props"]): Promise<void[]> | null;
    static tap<T extends Description>(hook: T, callback: Callback<T>, plugin?: Plugin, order?: TapOrder): void;
    static create<T extends Record<string, Description>>(): TapInstance<T>;
    static getTappers<T extends Description>(hook: T): Plugin[];
}
export {};
