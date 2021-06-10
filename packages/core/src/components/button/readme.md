---
title: button
---

# fl-button

This is a button

## Examples

<fl-button>Press me!</fl-button>

### Variants

<fl-button variant="primary">Primary</fl-button>
<fl-button variant="secondary">Secondary</fl-button>
<fl-button variant="success">Success</fl-button>
<fl-button variant="warning">Warning</fl-button>
<fl-button variant="danger">Danger</fl-button>

### Disabled

<fl-button disabled>Disabled</fl-button>
<fl-button variant="secondary" disabled>Disabled (secondary)</fl-button>

### Sizes

<fl-button>Normal</fl-button>
<fl-button size="large">Large</fl-button>

### Loading

unimplemented()

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                        | Type                                                             | Default     |
| ---------- | ---------- | -------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| `disabled` | `disabled` | Set to true to disable the button.                 | `boolean`                                                        | `false`     |
| `loading`  | `loading`  | Set to true to draw the button in a loading state. | `boolean`                                                        | `false`     |
| `name`     | `name`     | Button name, used in forms                         | `string`                                                         | `undefined` |
| `size`     | `size`     | Button size                                        | `"large" \| "normal"`                                            | `"normal"`  |
| `type`     | `type`     | Button function                                    | `"button" \| "reset" \| "submit"`                                | `undefined` |
| `value`    | `value`    | Button value, used in forms                        | `string`                                                         | `undefined` |
| `variant`  | `variant`  | Button variant                                     | `"danger" \| "primary" \| "secondary" \| "success" \| "warning"` | `"primary"` |


## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"icon"`  |             |
| `"label"` |             |


## Dependencies

### Used by

 - [fl-upload](../upload)

### Graph
```mermaid
graph TD;
  fl-upload --> fl-button
  style fl-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


