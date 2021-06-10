---
title: list
---

# fl-list

## Examples

### Float
<fl-list style="width: 200px;">
  <fl-item>item 1</fl-item>
  <fl-item>
    item 2
    <fl-list slot="nested" float>
      <fl-item>nested item 1</fl-item>
      <fl-item>nested item 2</fl-item>
      <fl-item>
        nested item 3
        <fl-list slot="nested" float>
          <fl-item>' nested item 1</fl-item>
          <fl-item>' nested item 2</fl-item>
        </fl-list>
      </fl-item>
    </fl-list>
  </fl-item>
  <fl-item>
    item 3
  </fl-item>
</fl-list>

### Flat
<fl-list>
  <fl-item>item 1</fl-item>
  <fl-item>
    item 2
    <fl-list slot="nested">
      <fl-item>nested item 1</fl-item>
      <fl-item>nested item 2</fl-item>
      <fl-item>
        nested item 3
        <fl-list slot="nested">
          <fl-item>' nested item 1</fl-item>
          <fl-item>' nested item 2</fl-item>
        </fl-list>
      </fl-item>
    </fl-list>
  </fl-item>
  <fl-item>
    item 3
  </fl-item>
</fl-list>


<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                  | Default |
| -------- | --------- | ----------- | --------------------- | ------- |
| `float`  | `float`   |             | `boolean`             | `false` |
| `items`  | --        |             | `HTMLFlItemElement[]` | `[]`    |


----------------------------------------------


