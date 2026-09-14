import { BareResponse } from "@mercuryworkshop/proxy-transports";
import { BodyType, ScramjetFetchHandler, ScramjetFetchParsed, ScramjetFetchRequest } from ".";
export declare function rewriteBody(handler: ScramjetFetchHandler, request: ScramjetFetchRequest, parsed: ScramjetFetchParsed, response: BareResponse): Promise<BodyType>;
