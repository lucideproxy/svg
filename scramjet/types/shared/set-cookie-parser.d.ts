type ParsedCookie = {
    name: string;
    value: string;
    expires?: Date;
    maxAge?: number;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: string;
    partitioned?: boolean;
    [key: string]: unknown;
};
declare function parseString(setCookieValue: string): ParsedCookie | null;
declare function parseNameValuePair(nameValuePairStr: string): {
    name: string;
    value: string;
} | null;
declare function parse(input: string | undefined): ParsedCookie[];
declare function splitCookiesString(cookiesString: unknown): string[];
export default parse;
export { parse, parseNameValuePair, parseString, splitCookiesString };
