export function blurOnEnter(node) {
  const handleKeyDown = event => event.key === "Enter" && node.blur();
  node.addEventListener("keydown", handleKeyDown);

  return {
    destroy() {
      node.removeEventListener("keydown", handleKeyDown);
    },
  };
}
