const components = {
  Header: [
    "Logo + Navigation Links",
    "Logo + Navigation Links + CTA Button",
    "Navigation Links Only",
  ],
  Hero: [
    "Heading + Description + Button",
    "Heading + Description + Button + Image",
    "Heading + Description Only",
  ],
  Footer: [
    "Copyright Only",
    "Copyright + Navigation Links",
    "Copyright + Social Links",
  ],
};

console.log("Available components:");
console.log("");

for (const [name, variants] of Object.entries(components)) {
  console.log(name);

  for (const variant of variants) {
    console.log(`  - ${variant}`);
  }

  console.log("");
}
