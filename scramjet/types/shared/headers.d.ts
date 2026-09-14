import { RawHeaders } from "@mercuryworkshop/proxy-transports";
export declare class ScramjetHeaders {
    headers: {};
    set(key: string, v: string): void;
    get(key: string): string | null;
    delete(key: string): void;
    has(key: string): boolean;
    toRawHeaders(): RawHeaders;
    toNativeHeaders(): Headers;
    static fromRawHeaders(raw: RawHeaders): ScramjetHeaders;
    static fromNativeHeaders(native: Headers): ScramjetHeaders;
    clone(): ScramjetHeaders;
}
