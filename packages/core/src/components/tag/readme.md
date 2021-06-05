---
title: tag
---

# fl-tag

## Examples

### Standard tags
<fl-tag text="Standard Tag 1"></fl-tag>
<fl-tag text="Standard Tag 2"></fl-tag>

### Removable tags
<fl-tag class="removable-tag" text="Removable Tag 1" removable></fl-tag>
<fl-tag class="removable-tag" text="Removable Tag 2" removable></fl-tag>
<fl-tag class="removable-tag" text="Removable Tag 3" removable></fl-tag>

<script>
  const tags = document.querySelectorAll(".removable-tag");
  for (let tag of tags) {
    tag.handleRemove = () => tag.remove();
  }
</script>
<!-- Auto Generated Below -->


## Properties

| Property       | Attribute   | Description | Type                          | Default                                                     |
| -------------- | ----------- | ----------- | ----------------------------- | ----------------------------------------------------------- |
| `handleRemove` | --          |             | `(event: MouseEvent) => void` | `() => {     throw "<fl-tag>: Missing remove handler";   }` |
| `removable`    | `removable` |             | `boolean`                     | `false`                                                     |
| `text`         | `text`      |             | `string`                      | `"<missing text>"`                                          |


----------------------------------------------


