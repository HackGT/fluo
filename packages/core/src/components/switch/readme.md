---
title: switch
---

# fl-switch

As the name implies, a toggle switch.

## Showcase

<fl-switch>Off</fl-switch>
<fl-switch on>On</fl-switch>
<fl-switch disabled>Disabled</fl-switch>

## Use Cases
- Toggling settings and preferences

## Prior Art/Examples
- [material ui](https://material-ui.com/components/switches/#switch)
- [chakra ui](https://chakra-ui.com/docs/form/switch)
- [shoelace](https://shoelace.style/components/switch)
- [fast design](https://www.fast.design/docs/components/switch)

## API
*Component name:*
* `<fl-switch>`

*Attributes:*
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| on | Moves the switch to the `on` state if set to true | boolean | false |
| disabled | Disables the switch | boolean | false |

*Slots:*
| Slot | Description |
| --- | --- |
| thumb | The thumb of the switch |

*Note: The thumb slot is also the default slot*

*CSS Parts:*
* What CSS Parts does your component expose?

## Example usage
```html
<fl-switch></fl-switch>
<fl-switch on></fl-switch>
<fl-switch>
    <fl-icon name="icon_name" slot="thumb"></fl-icon>
</fl-switch>
```

<!-- Auto Generated Below -->


----------------------------------------------


