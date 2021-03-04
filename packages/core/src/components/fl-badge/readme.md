---
title: badge
---

# fl-badge

This is a badge component meant for use as a sort of notification bubble.

## Examples 

 <!--Some Badge Examples-->
  <button style="height: 100px; width: 150px; padding: 20px; border: 2px solid #4CAF50; color: black; background-color: white">
    <fl-badge>TEXT</fl-badge>
  </button>

  <button style="height: 100px; width: 150px; padding: 20px; border: 2px solid #4CAF50; color: black; background-color: white">
    <fl-badge position="bottom-right" pill >TEXT</fl-badge>
  </button>

  <button style="height: 100px; width: 150px; padding: 20px; border: 2px solid #4CAF50; color: black; background-color: white">
    <fl-badge position="bottom-right" type="success" pill >TEXT</fl-badge>
  </button>

  <button style="height: 100px; width: 150px; padding: 20px; border: 2px solid #4CAF50; color: black; background-color: white">
    <fl-badge position="top-right" type="danger" pill >TEXT</fl-badge>
  </button>


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                                         | Default          |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------ | ---------------- |
| `pill`     | `pill`     |             | `boolean`                                                                                                    | `false`          |
| `position` | `position` |             | `BOTTOMLEFT, BOTTOMRIGHT, NONE, TOPLEFT, TOPRIGHT`                                                       | `NONE` |
| `type`     | `type`     |             | `DANGER, INFO, PRIMARY, SUCCESS, WARNING`                                                                | `btypes.PRIMARY` |


----------------------------------------------


