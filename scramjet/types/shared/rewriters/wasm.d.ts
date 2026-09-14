import { Rewriter } from "../../../rewriter/wasm/out/wasm.js";
import type { JsRewriterOutput } from "../../../rewriter/wasm/out/wasm.js";
import { ScramjetContext } from "@/shared";
export type { JsRewriterOutput, Rewriter };
import { URLMeta } from "@rewriters/url";
export declare function setWasm(u8: Uint8Array | ArrayBuffer): void;
export declare function getRewriter(context: ScramjetContext, meta: URLMeta): [Rewriter, () => void];
