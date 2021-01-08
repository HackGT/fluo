//
// Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
// string. This is useful because we can't use slot.textContent as an alternative.
//
export function getTextContent(slot: HTMLSlotElement): string {
  const nodes = slot ? slot.assignedNodes({ flatten: true }) : [];
  let text = "";

  [...nodes].map(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });

  return text;
}
