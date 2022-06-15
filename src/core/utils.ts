import { CSSResultArray, CSSResultGroup, CSSResultOrNative } from 'lit';

/**
 * Converts a `CSSResultGroup` to an array.
 * @param styles The styles to convert.
 * @returns The array of `CSSResultOrNative` or `CSSResultArray`.
 */
export function asArray(styles?: CSSResultGroup): (CSSResultOrNative | CSSResultArray)[] {
    if (styles === undefined) {
        return [];
    }

    if (Array.isArray(styles)) {
        return [...styles];
    }

    return [styles];
}

/**
 * Formats the given string with the specified arguments.
 * @param format The format.
 * @param args The arguments used to format the string.
 * @returns The formatted string.
 */
export function format(format: string, ...args: unknown[]) {
    if (!args.length) {
        return format;
    }

    const type = typeof args[0];
    const formatArgs = type === 'string' || type === 'number' ? Array.prototype.slice.call(args) : args[0];

    return format.replace(/{([A-z0-9-_#@\\.]+)}/g, (match, path) => get(path, formatArgs) || match);
}

/**
 * Generates a 'unique' identifier.
 * @returns The unique identifier.
 */
export function getUUID(): string {
    const chr4 = () => Math.random().toString(16).slice(-4);
    return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
}

/**
 * Gets the value at the specified `path` from the `source` object.
 * @param path The path to the property to get.
 * @param source The source object that is being read from.
 * @returns The value of the property.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function get(path: string, source: any): any {
    const props: string[] = path.split('.');
    return props.reduce((obj, prop) => obj && obj[prop], source);
}

/**
 * Sets the specified `value` on the `target` object at the desired property `path`.
 * @param path The path to the property to set.
 * @param target The target object that is being written to.
 * @param value The value to write.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function set(path: string, target: any, value: unknown): void {
    const props = path.split('.');
    props.reduce((obj, prop, i) => {
        return i === props.length - 1 ? (obj[prop] = value) : obj[prop] || (obj[prop] = {});
    }, target);
}

/**
 * Determines whether the specified item is an object.
 * @param item The item to check
 * @returns `true` when the item is an object; otherwise `false`.
 */
export const isObject = (item: unknown): boolean => {
    return item && typeof item === 'object' && !Array.isArray(item) ? true : false;
};

/**
 * Merges all sources into the target object.
 * @param target The target object.
 * @param sources The source objects; these are used to update the target object.
 * @returns The target object, with the sources merged.
 * {@link https://stackoverflow.com/a/34749873/259656}
 */
export const merge = <T>(target: T, ...sources: DeepPartial<T>[]): T => {
    if (!sources.length) {
        return target;
    }

    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!(<Record<string, unknown>>target)[key]) {
                    Object.assign(target, { [key]: {} });
                }

                merge((<Record<string, unknown>>target)[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return merge(target, ...sources);
};
