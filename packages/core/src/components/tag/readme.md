# fl-alert



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                            | Type                                                                               | Default     |
| ----------- | ----------- | -------------------------------------- | ---------------------------------------------------------------------------------- | ----------- |
| `closable` | `closable` | Set to true to make the alert closable. | `boolean`                                                                          | `false`     |
| `open`      | `open`      | Set to true to indicate that the alert is open.                        | `boolean`                                                   | `"false"`  |
| `type`      | `type`      | The tag's type.                        | `"primary" \| "success" \| "info" \| "warning" \| "danger"` | `"default"` |


## Events

| Event   | Description                                 | Type               |
| ------- | ------------------------------------------- | ------------------ |
| `fl-show` | Emitted when the alert opens. | `CustomEvent<any>` |
| `fl-after-show` | Emitted after the alert opens and all transitions are complete. | `CustomEvent<any>` |
| `fl-hide` | Emitted when the alert closes. | `CustomEvent<any>` |
| `fl-after-hide` | Emitted after the alert closes and all transitions are complete. | `CustomEvent<any>` |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"base"`    |             |
| `"icon"`   |             |
| `"message"` |             |


## Dependencies

<!-- ### Used by -->

 - n/a
 <!-- - [fl-select](../select) -->

<!-- ### Graph -->
<!-- ```mermaid
graph TD;
  fl-select --> fl-tag
  style fl-tag fill:#f9f,stroke:#333,stroke-width:4px
``` -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
