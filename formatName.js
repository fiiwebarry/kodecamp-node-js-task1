let a = 'victor red';

function formatName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(formatName(a));
