/**
 * adapted version from https://github.com/webcomponents/custom-elements-manifest/blob/master/schema.ts
 *
 * Doesn't support all of the fields yet
 */
export interface CustomElement {
    tagName: string;
    attributes?: Attribute[];
    events?: Event[];
    slots?: Slot[];
    parts?: CssPart[];
    cssProperties?: CssCustomProperty[];
}

export interface Attribute {
    name: string;
    description: string;
    type: Type;
    defaultValue: string;
}

export interface Event {
    name: string;
    description: string;
}

export interface Slot {
    name: string;
    description: string;
}

export interface CssPart {
    name: string;
    description: string;
}

export interface CssCustomProperty {
    name: string;
    defaultValue: string;
    description: string;
}

export interface Type {
    dataType: DataType;
    values?: string[];
    range?: { start?: number; end?: number; step?: number};
}

export enum DataType {
    number = "number",
    string = "string",
    boolean = "boolean",
    array = "array",
    enumeration = "enum"
}
