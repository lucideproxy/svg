import { ScramjetHeaders } from "@/shared";
import { ScramjetFetchHandler, ScramjetFetchParsed, ScramjetFetchRequest } from ".";
import { RawHeaders } from "@mercuryworkshop/proxy-transports";
export declare function rewriteResponseHeaders(handler: ScramjetFetchHandler, request: ScramjetFetchRequest, parsed: ScramjetFetchParsed, rawHeaders: RawHeaders): Promise<ScramjetHeaders>;
export declare function rewriteRequestHeaders(request: ScramjetFetchRequest, handler: ScramjetFetchHandler, parsed: ScramjetFetchParsed): ScramjetHeaders;
/**
 * Compute the immediate Sec-Fetch-Site relation between an initiator origin and
 * a destination URL.
 *
 * - "same-origin" if scheme + host + port match exactly.
 * - "same-site" if scheme matches and the registrable domains match.
 * - "cross-site" otherwise.
 */
export declare function computeFetchSite(originUrl: URL, destUrl: URL): "same-origin" | "same-site" | "cross-site";
/**
 * Combine two Sec-Fetch-Site classifications, returning the "worst" (least
 * trusted) of the two. Used when propagating state through redirect chains.
 */
export declare function worstFetchSite(a: "none" | "same-origin" | "same-site" | "cross-site", b: "none" | "same-origin" | "same-site" | "cross-site"): "none" | "same-origin" | "same-site" | "cross-site";
