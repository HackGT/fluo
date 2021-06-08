---
title: list
---

# fl-list

## Examples

### Default list

### Nested list (no collapse)
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


----------------------------------------------


