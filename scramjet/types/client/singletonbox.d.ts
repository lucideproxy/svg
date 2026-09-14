import { IncrementalHtmlRewriter } from "@/shared";
import { ScramjetClient } from "./client";
import { SourceMaps } from "./shared/sourcemaps";
export declare class SingletonBox {
    ownerclient: ScramjetClient;
    clients: ScramjetClient[];
    globals: Map<Self, ScramjetClient>;
    documents: Map<Document, ScramjetClient>;
    histories: Map<History, ScramjetClient>;
    locations: Map<Location, ScramjetClient>;
    writeRewriters: WeakMap<Document, IncrementalHtmlRewriter>;
    unproxy: Map<any, any>;
    ctors: Record<string, Function[]>;
    sourcemaps: SourceMaps;
    constructor(ownerclient: ScramjetClient);
    registerClient(client: ScramjetClient, global: Self): void;
    instanceof(obj: any, name: string): boolean;
}
