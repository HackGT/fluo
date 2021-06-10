---
title: details
---

# fl-details

This is a detail component that holds extra information which can be shown when expanded.

## Examples 

<fl-details heading='Standard Detail'>Any extra information could go here. It would show whenever the detail is clicked.</fl-details>
<fl-details heading='Detail with Heading'>
<b>Heading</b><br />
Along with the heading, other information can be added as well.
</fl-details>
<fl-details disabled heading='Disabled Detail'>
Unless there is a bug, you shouldn't be able to see this.
</fl-details>
<fl-details opened heading='Already Opened Detail'>
You should be able to see this without having to click the detail.
</fl-details>

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                                         | Default          |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| `opened`   | `opened`   | `Whether or not detail is already opened.` | `boolean`                                                                     | `false`          |
| `disabled` | `disabled` | `Whether or not detail can be opened.` | `boolean`                                                                         | `false`          |
| `heading`  | `heading`  | `Heading that the detail shows regarding` | `string`                                                                       | `undefined`      |          


----------------------------------------------


