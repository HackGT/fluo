---
title: menu
---

# fl-menu

## Examples

<style>
  fl-menu {
    min-width: 200px;
  }
</style>

Simple Menu

<fl-menu>
  <fl-item> item 1 </fl-item>
  <fl-item> item 2 </fl-item>
  <fl-item> item 3 </fl-item>
</fl-menu>

Nested Menu

<fl-menu>
  <fl-item> item 1 </fl-item>
  <fl-item> item 2 </fl-item>
  <fl-item> 
    item 3
    <fl-menu>
      <fl-item> nested item 1 </fl-item>
      <fl-item> 
        nested item 2 
        <fl-menu>
          <fl-item> 'nested item 1 </fl-item>
          <fl-item> 'nested item 2 </fl-item>
          <fl-item> 'nested item 3 </fl-item>
          <fl-item> 'nested item 4 </fl-item>
          <fl-item> 'nested item 5 </fl-item>
          <fl-item> 'nested item 6 </fl-item>
        </fl-menu>
      </fl-item>
      <fl-item> nested item 3 </fl-item>
    </fl-menu>
  </fl-item>
</fl-menu>

<!-- Auto Generated Below -->


## Events

| Event       | Description                      | Type                                        |
| ----------- | -------------------------------- | ------------------------------------------- |
| `fl-select` | Emits event when item is clicked | `CustomEvent<{ item: HTMLFlItemElement; }>` |


----------------------------------------------


