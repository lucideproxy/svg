export interface ParsedMimeType {
    type: string;
    subtype: string;
    /** `type`/`subtype` in ASCII lowercase; excludes parameters. */
    essence: string;
}
/**
 * Parses a MIME type string (e.g. a Content-Type value) into type, subtype, and essence.
 * Returns null if the input is not a valid MIME type.
 */
export declare function parseMimeType(input: string): ParsedMimeType | null;
/** A MIME type whose type is "image". */
export declare function isImageMimeType(mime: string | ParsedMimeType): boolean;
/** Audio, video, or essence `application/ogg`. */
export declare function isAudioOrVideoMimeType(mime: string | ParsedMimeType): boolean;
/** Type `font` or a registered font essence. */
export declare function isFontMimeType(mime: string | ParsedMimeType): boolean;
/** Subtype ends with `+zip` or essence `application/zip`. */
export declare function isZipBasedMimeType(mime: string | ParsedMimeType): boolean;
/** One of the archive essences. */
export declare function isArchiveMimeType(mime: string | ParsedMimeType): boolean;
/** Subtype ends with `+xml` or essence `text/xml` / `application/xml`. */
export declare function isXmlMimeType(mime: string | ParsedMimeType): boolean;
/** Essence `text/html`. */
export declare function isHtmlMimeType(mime: string | ParsedMimeType): boolean;
/** XML, HTML, or `application/pdf`. */
export declare function isScriptableMimeType(mime: string | ParsedMimeType): boolean;
/** Essence is one of the JavaScript MIME type essences. */
export declare function isJavascriptMimeType(mime: string | ParsedMimeType): boolean;
/**
 * True if the string is an ASCII case-insensitive match for one of the
 * JavaScript MIME type essence strings (not necessarily a full parsed MIME type).
 */
export declare function isJavascriptMimeTypeEssenceMatch(s: string): boolean;
/**
 * Script block type string for a `<script>` element (prepare a script).
 * Resolves `type` when present; otherwise maps obsolete `language` to `text/…`.
 * @see https://html.spec.whatwg.org/multipage/scripting.html#prepare-a-script
 */
export declare function getScriptBlockTypeString(type: string | null | undefined, language: string | null | undefined, hasTypeAttribute?: boolean, hasLanguageAttribute?: boolean): string;
/**
 * Whether a `<script type="...">` value denotes executable JavaScript
 * (classic or module script), not a data block or import map.
 * @see https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type
 */
export declare function isScriptType(type: string | null | undefined): boolean;
/** Whether `type` denotes a JavaScript module script. */
export declare function isModuleScriptType(type: string | null | undefined): boolean;
/**
 * MIME types typically shown inline in a browsing context (navigation / iframe),
 * as opposed to triggering a download when Content-Disposition is absent.
 */
export declare function isInlineDisplayableMimeType(mime: string | ParsedMimeType): boolean;
