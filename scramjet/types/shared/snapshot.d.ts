export declare const String: StringConstructor;
export declare const String_fromCodePoint: (...codePoints: number[]) => string;
export declare const String_fromCharCode: (...codes: number[]) => string;
export declare const String_startsWith: (str: string, searchString: string, position?: number) => boolean;
export declare const Number: NumberConstructor;
export declare const Number_parseInt: (string: string, radix?: number) => number;
export declare const Number_isSafeInteger: (number: unknown) => boolean;
export declare const Object_keys: {
    (o: object): string[];
    (o: {}): string[];
};
export declare const Object_values: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): T[];
    (o: {}): any[];
};
export declare const Object_entries: {
    <T>(o: {
        [s: string]: T;
    } | ArrayLike<T>): [string, T][];
    (o: {}): [string, any][];
};
export declare const Object_hasOwn: (o: object, v: PropertyKey) => boolean;
export declare const Object_getOwnPropertyNames: (o: any) => string[];
export declare const Object_getOwnPropertyDescriptor: (o: any, p: PropertyKey) => PropertyDescriptor | undefined;
export declare const Object_getOwnPropertyDescriptors: <T>(o: T) => { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
};
export declare const Object_getOwnPropertySymbols: (o: any) => symbol[];
export declare const Object_defineProperty: <T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
export declare const Object_defineProperties: <T>(o: T, properties: PropertyDescriptorMap & ThisType<any>) => T;
export declare const Object_setPrototypeOf: (o: any, proto: object | null) => any;
export declare const Reflect_get: typeof Reflect.get;
export declare const Reflect_set: typeof Reflect.set;
export declare const Reflect_has: typeof Reflect.has;
export declare const Reflect_ownKeys: typeof Reflect.ownKeys;
export declare const Reflect_construct: typeof Reflect.construct;
export declare const Reflect_apply: typeof Reflect.apply;
export declare const Array_from: {
    <T>(arrayLike: ArrayLike<T>): T[];
    <T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
    <T>(iterable: Iterable<T> | ArrayLike<T>): T[];
    <T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
};
export declare const Array_isArray: (arg: any) => arg is any[];
export declare const Array_of: <T>(...items: T[]) => T[];
export declare const JSON_parse: (text: string, reviver?: (this: any, key: string, value: any) => any) => any;
export declare const JSON_stringify: {
    (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    (value: any, replacer?: (number | string)[] | null, space?: string | number): string;
};
export declare const TextEncoder_encode: any;
export declare const TextDecoder_decode: any;
export declare const Performance_now: any;
export declare const btoa: typeof globalThis.btoa;
export declare const atob: typeof globalThis.atob;
export declare const URL_createObjectURL: any;
export declare const URL_revokeObjectURL: any;
export declare const Error: ErrorConstructor;
export declare const Math_random: () => number;
export declare const Math_min: (...values: number[]) => number;
export declare const Promise_all: any;
export declare const Promise_race: any;
export declare const Promise_resolve: any;
export declare const Promise_reject: any;
export declare const Promise_allSettled: any;
export declare const Promise_any: any;
export declare const Symbol_for: (key: string) => symbol;
declare const WrappedBrand: unique symbol;
type WrappedInstance<T> = T extends object ? Wrapped<T> : T;
type ConstructorPrototype<T> = T extends {
    prototype: infer P;
} ? P : never;
type InstantiatePrototype<P, Params extends unknown[]> = Params extends [
    infer A,
    infer B
] ? P extends WeakMap<any, any> ? WeakMap<A & WeakKey, B> : P extends Map<any, any> ? Map<A, B> : P : Params extends [infer A] ? P extends WeakSet<any> ? WeakSet<A & object> : P extends Set<any> ? Set<A> : P : P;
type WrappedCtorStatics<T> = Pick<T, Exclude<keyof T, "prototype">>;
type WrappedCtor<T, Params extends unknown[], New extends abstract new (...a: any) => any> = New & WrappedCtorStatics<T> & {
    prototype: Wrapped<InstantiatePrototype<ConstructorPrototype<T>, Params>>;
    readonly [WrappedBrand]: T;
};
type WrappedConstructor<T> = ConstructorPrototype<T> extends Map<any, any> ? T extends {
    new <K, V>(...args: infer Args): any;
} ? WrappedCtor<T, [
    unknown,
    unknown
], new <K, V>(...args: Args) => Wrapped<Map<K, V>>> : never : ConstructorPrototype<T> extends WeakMap<any, any> ? T extends {
    new <K extends WeakKey, V>(...args: infer Args): any;
} ? WrappedCtor<T, [
    WeakKey,
    unknown
], new <K extends WeakKey, V>(...args: Args) => Wrapped<WeakMap<K, V>>> : never : ConstructorPrototype<T> extends WeakSet<any> ? T extends {
    new <U extends object>(...args: infer Args): any;
} ? WrappedCtor<T, [
    object
], new <U extends object>(...args: Args) => Wrapped<WeakSet<U>>> : never : ConstructorPrototype<T> extends Set<any> ? T extends {
    new <U>(...args: infer Args): any;
} ? WrappedCtor<T, [
    unknown
], new <U>(...args: Args) => Wrapped<Set<U>>> : never : T extends {
    new <K, V>(...args: infer Args): any;
} ? WrappedCtor<T, [
    unknown,
    unknown
], new <K, V>(...args: Args) => Wrapped<InstantiatePrototype<ConstructorPrototype<T>, [K, V]>>> : T extends {
    new <U>(...args: infer Args): any;
} ? WrappedCtor<T, [
    unknown
], new <U>(...args: Args) => Wrapped<InstantiatePrototype<ConstructorPrototype<T>, [U]>>> : T extends abstract new (...args: infer Args) => infer Instance ? Omit<T, "prototype"> & {
    new (...args: Args): WrappedInstance<Instance>;
    prototype: WrappedInstance<Instance>;
    readonly [WrappedBrand]: T;
} : never;
export type Wrapped<T> = T extends abstract new (...args: any) => any ? WrappedConstructor<T> : T & {
    readonly [WrappedBrand]: T;
};
export declare const _URL: WrappedCtor<{
    new (url: string | URL, base?: string | URL): URL;
    prototype: URL;
    canParse(url: string | URL, base?: string | URL): boolean;
    createObjectURL(obj: Blob | MediaSource): string;
    parse(url: string | URL, base?: string | URL): URL | null;
    revokeObjectURL(url: string): void;
}, [unknown, unknown], new <K, V>(url: string | URL, base?: string | URL) => URL & {
    readonly [WrappedBrand]: URL;
}>;
export type _URL = Wrapped<URL>;
export declare const _Headers: WrappedCtor<{
    new (init?: HeadersInit): Headers;
    prototype: Headers;
}, [unknown, unknown], new <K, V>(init?: HeadersInit) => Headers & {
    readonly [WrappedBrand]: Headers;
}>;
export type _Headers = Wrapped<Headers>;
export declare const _Date: WrappedCtor<DateConstructor, [unknown, unknown], new <K, V>(value: string | number | Date) => Date & {
    readonly [WrappedBrand]: Date;
}>;
export type _Date = Wrapped<Date>;
export declare const _URLSearchParams: WrappedCtor<{
    new (init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
    prototype: URLSearchParams;
}, [unknown, unknown], new <K, V>(init?: string | Record<string, string> | URLSearchParams | string[][]) => URLSearchParams & {
    readonly [WrappedBrand]: URLSearchParams;
}>;
export type _URLSearchParams = Wrapped<URLSearchParams>;
export declare const _RegExp: WrappedCtor<RegExpConstructor, [unknown, unknown], new <K, V>(pattern: string | RegExp, flags?: string) => RegExp & {
    readonly [WrappedBrand]: RegExp;
}>;
export type _RegExp = Wrapped<RegExp>;
export declare const _Set: WrappedCtor<SetConstructor, [object], new <U extends object>(iterable?: Iterable<unknown>) => WeakSet<U> & {
    readonly [WrappedBrand]: WeakSet<U>;
}>;
export type _Set<T> = Wrapped<Set<T>>;
export declare const _Map: WrappedCtor<MapConstructor, [unknown, unknown], new <K, V>(iterable?: Iterable<readonly [unknown, unknown]>) => Map<K, V> & {
    readonly [WrappedBrand]: Map<K, V>;
}>;
export type _Map<K, V> = Wrapped<Map<K, V>>;
export declare const _WeakSet: WrappedCtor<WeakSetConstructor, [object], new <U extends object>(iterable: Iterable<WeakKey>) => WeakSet<U> & {
    readonly [WrappedBrand]: WeakSet<U>;
}>;
export type _WeakSet<T extends object> = Wrapped<WeakSet<T>>;
export declare const _WeakMap: WrappedCtor<WeakMapConstructor, [WeakKey, unknown], new <K extends WeakKey, V>(iterable: Iterable<readonly [WeakKey, unknown]>) => WeakMap<K, V> & {
    readonly [WrappedBrand]: WeakMap<K, V>;
}>;
export type _WeakMap<K extends object, V extends object> = Wrapped<WeakMap<K, V>>;
export declare const _Uint8Array: WrappedCtor<Uint8ArrayConstructor, [unknown, unknown], new <K, V>() => Uint8Array<ArrayBufferLike> & {
    readonly [WrappedBrand]: Uint8Array<ArrayBufferLike>;
}>;
export type _Uint8Array = Wrapped<Uint8Array>;
export declare const _TextDecoder: WrappedCtor<{
    new (label?: string, options?: TextDecoderOptions): TextDecoder;
    prototype: TextDecoder;
}, [unknown, unknown], new <K, V>(label?: string, options?: TextDecoderOptions) => TextDecoder & {
    readonly [WrappedBrand]: TextDecoder;
}>;
export type _TextDecoder = Wrapped<TextDecoder>;
export declare const _TextEncoder: WrappedCtor<{
    new (): TextEncoder;
    prototype: TextEncoder;
}, [unknown, unknown], new <K, V>() => TextEncoder & {
    readonly [WrappedBrand]: TextEncoder;
}>;
export type _TextEncoder = Wrapped<TextEncoder>;
export declare function makeWrap<T extends object>(source: T): Wrapped<T>;
export {};
