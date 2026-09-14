export type Cookie = {
    name: string;
    value: string;
    path?: string;
    expires?: number;
    maxAge?: number;
    domain?: string;
    hostOnly?: boolean;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: string;
};
export declare class CookieJar {
    private cookies;
    private byDomain;
    private defaultPath;
    private pathMatches;
    private indexCookie;
    private unindexCookie;
    private removeById;
    setCookies(cookieString: string, url: URL): void;
    getCookies(url: URL, fromJs: boolean, sameSiteContext?: "strict" | "lax" | "cross-site"): string;
    load(cookies: string | Record<string, Cookie>): void;
    clear(): void;
    dump(): string;
}
