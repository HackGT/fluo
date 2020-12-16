import { CustomElement, DataType } from "../schema";

const fluoButtonDefinition: CustomElement = {
    tagName: "fl-button",
    attributes: [
        {
            name: "on",
            description: "is the button on or off?",
            type: {
                dataType: DataType.boolean
            },
            defaultValue: "true"
        },
        {
            name: "hi",
            description: "do you want to say hi?",
            type: {
                dataType: DataType.enumeration,
                values: ["AAA", "BBB", "CCC", "DDD"]
            },
            defaultValue: ""
        },
        {
            name: "val",
            description: "how high can you go?",
            type: {
                dataType: DataType.number,
                range: { start: 0, end: 10 }
            },
            defaultValue: "0"
        }
    ],
    cssProperties: [
        {
            name: "--testing-background-color",
            description: "this is to test the interact component",
            defaultValue: "#fff"
        },
        {
            name: "--font-size-large",
            description: "how big should the font be?",
            defaultValue: "idk?"
        }
    ]
};
export default fluoButtonDefinition;
