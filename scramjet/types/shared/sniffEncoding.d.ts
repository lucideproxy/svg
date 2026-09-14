/**
 * WHATWG Encoding Sniffing Algorithm
 *
 * Implements the encoding sniffing algorithm from the HTML spec:
 * https://html.spec.whatwg.org/multipage/parsing.html#determining-the-character-encoding
 *
 * And the "algorithm for extracting a character encoding from a meta element":
 * https://html.spec.whatwg.org/multipage/urls-and-fetching.html#algorithm-for-extracting-a-character-encoding-from-a-meta-element
 *
 * And "get an encoding" from the Encoding spec:
 * https://encoding.spec.whatwg.org/#concept-encoding-get
 */
/**
 * https://encoding.spec.whatwg.org/#concept-encoding-get
 *
 * "To get an encoding from a string label":
 * 1. Remove any leading and trailing ASCII whitespace from label.
 * 2. If label is an ASCII case-insensitive match for any of the labels listed
 *    in the table, return the corresponding encoding; otherwise return failure.
 */
export declare function getEncoding(label: string): string | null;
/**
 * https://html.spec.whatwg.org/multipage/urls-and-fetching.html#algorithm-for-extracting-a-character-encoding-from-a-meta-element
 *
 * The algorithm for extracting a character encoding from a `meta` element,
 * given a string s.
 */
export declare function extractCharsetFromMeta(s: string): string | null;
/**
 * https://html.spec.whatwg.org/multipage/parsing.html#prescan-a-byte-stream-to-determine-its-encoding
 *
 * Prescan the first `limit` bytes of a byte stream to determine its encoding.
 * Returns an encoding name or null if none found.
 */
export declare function prescanByteStream(bytes: Uint8Array, limit?: number): string | null;
/**
 * https://encoding.spec.whatwg.org/#bom-sniff
 *
 * BOM sniff: check the first 2-3 bytes for a byte order mark.
 */
export declare function bomSniff(bytes: Uint8Array): string | null;
/**
 * Extract the charset parameter from a Content-Type header value.
 *
 * This parses the Content-Type more carefully than a naive split — it handles
 * quoted values and multiple parameters.
 *
 * This follows what MIME Sniffing / HTTP specs say: find `charset=` parameter.
 */
export declare function extractCharsetFromContentType(contentType: string): string | null;
/**
 * Determine the character encoding of an HTML document's byte stream.
 *
 * Implements a simplified version of the WHATWG encoding sniffing algorithm
 * for use in a service worker / proxy context:
 *
 * 1. BOM sniffing (certain)
 * 2. Transport layer: Content-Type header charset parameter (certain)
 * 3. Prescan byte stream: look for <meta charset> or
 *    <meta http-equiv="content-type" content="...charset=..."> in first 1024 bytes (tentative)
 * 4. Default to UTF-8
 *
 * Returns an encoding name suitable for use with TextDecoder.
 */
export declare function sniffEncoding(bytes: Uint8Array, contentTypeHeader: string | null): string;
