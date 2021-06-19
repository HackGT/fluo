---
title: slider
---

# fl-slider

As the name implies, a toggle switch.

## Showcase

<fl-slider min=0 max=1000 value=25></fl-slider>

## Use Cases
- Toggling settings and preferences

## Prior Art/Examples
- [material ui](https://material-ui.com/components/switches/#switch)
- [chakra ui](https://chakra-ui.com/docs/form/switch)
- [shoelace](https://shoelace.style/components/switch)
- [fast design](https://www.fast.design/docs/components/switch)


## Example usage
```html
<fl-switch></fl-switch>
<fl-switch on></fl-switch>
<fl-switch>
    <fl-icon name="icon_name" slot="thumb"></fl-icon>
</fl-switch>
```


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                     | Type      | Default     |
| ---------- | ---------- | ----------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | Disables the switch                             | `boolean` | `undefined` |
| `name`     | `name`     | `name` of the switch                            | `string`  | `undefined` |
| `on`       | `on`       | Moves the switch to the on state if set to true | `boolean` | `undefined` |
| `value`    | `value`    | `value` of the switch                           | `string`  | `undefined` |


## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"label"` |             |
| `"thumb"` |             |
| `"track"` |             |


----------------------------------------------


