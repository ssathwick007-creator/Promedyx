/**
 * Clean, lightweight classname merger for design system components.
 * Filters falsy values and merges conditional class expressions without external dependencies.
 *
 * @param {...(string|boolean|null|undefined|Record<string, boolean>)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  const classes = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input.trim());
    } else if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) classes.push(inner);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value && key) classes.push(key);
      }
    }
  }

  return classes.join(' ');
}

export default cn;

