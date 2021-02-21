---
title: checkbox
---

# fl-checkbox

A component to allow the user to select items.

## Showcase

<fl-checkbox>Regular</fl-checkbox>

<fl-checkbox checked>Checked</fl-checkbox>

<fl-checkbox indeterminate>Indeterminate</fl-checkbox>

<fl-checkbox disabled>Disabled</fl-checkbox>

## Use Cases
Provide an interface for users to select an item(s), for example to indicate preferences in a form, toggle settings, etc.

## Prior Art/Examples
- [material ui](https://material-ui.com/components/checkboxes/#checkbox)
- [shoelace](https://shoelace.style/components/details)
- [fast design](https://www.fast.design/docs/components/checkbox)
- [theme ui](https://theme-ui.com/components/checkbox)
- [base web](https://baseweb.design/components/checkbox/)
- [chakra](https://chakra-ui.com/docs/form/checkbox)

## API
*Component name:*
* `<fl-checkbox>`

*Attributes:*
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked | Puts the checkbox in the checked state | boolean | false |
| disabled | Disables the checkbox | boolean | false |
| indeterminate | Puts the checkbox in a partially-checkd state | boolean | false |
| name | Name of the checkbox | string | undefined |
| value | The string to use as the value of the checkbox when submitting the form, if the checkbox is currently toggled on | string | undefined |

*Slots:*
* Default slot: Used to specify the label of the checkbox

*CSS Parts:*
* What CSS Parts does your component expose?

## Example usage
```html
<fl-checkbox>Unchecked</fl-checkbox>
<fl-checkbox checked>Checked</fl-checkbox>
<fl-checkbox disabled>Disabled</fl-checkbox>
<fl-checkbox indeterminate>Partially Checked</fl-checkbox>
<fl-checkbox name="name-of-checkbox">Named Checkbox</fl-checkbox>
```



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                      | Type      | Default     |
| --------------- | --------------- | ------------------------------------------------ | --------- | ----------- |
| `checked`       | `checked`       | Determines is checkbox is checked                | `boolean` | `false`     |
| `disabled`      | `disabled`      | Determines if checkbox is disabled               | `boolean` | `false`     |
| `indeterminate` | `indeterminate` | Determines if checkbox is in indeterminate state | `boolean` | `false`     |
| `name`          | `name`          | Name of checkbox                                 | `string`  | `undefined` |
| `value`         | `value`         | Value of checkbox                                | `string`  | `undefined` |


## Shadow Parts

| Part                   | Description |
| ---------------------- | ----------- |
| `"checked-icon"`       |             |
| `"indeterminate-icon"` |             |
| `"label"`              |             |


----------------------------------------------


