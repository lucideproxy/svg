import type { RawHeaders } from "@mercuryworkshop/proxy-transports";
import type { Config } from ".";
import { CookieJar, type ScramjetConfig, type TrackedHistoryState } from "@mercuryworkshop/scramjet";
type Init = {
    config: Config;
    sjconfig: ScramjetConfig;
    prefix: URL;
    cookies: string;
    yieldGetInjectScripts: (config: Config, sjconfig: ScramjetConfig, prefix: URL, cookieJar: CookieJar, codecEncode: (input: string) => string, codecDecode: (input: string) => string) => any;
    codecEncode: (input: string) => string;
    codecDecode: (input: string) => string;
    initHeaders: RawHeaders;
    history: TrackedHistoryState[];
};
export declare function load(init: Init): void;
export {};
