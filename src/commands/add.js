import { select } from "@inquirer/prompts";
import { generateComponent } from "../generators/component.js";

const FRAMEWORKS = [
  { name: "HTML", value: "html" },
  { name: "React", value: "react" },
];

const COMPONENTS = [
  { name: "Header", value: "header" },
  { name: "Hero", value: "hero" },
  { name: "Footer", value: "footer" },
];

const VARIANTS = {
  header: [
    { name: "Logo + Navigation Links", value: "logo-navigation" },
    { name: "Logo + Navigation Links + CTA Button", value: "logo-navigation-cta" },
    { name: "Navigation Links Only", value: "navigation-only" },
  ],
  hero: [
    { name: "Heading + Description + Button", value: "heading-description-button" },
    { name: "Heading + Description + Button + Image", value: "heading-description-button-image" },
    { name: "Heading + Description Only", value: "heading-description" },
  ],
  footer: [
    { name: "Copyright Only", value: "copyright" },
    { name: "Copyright + Navigation Links", value: "copyright-navigation" },
    { name: "Copyright + Social Links", value: "copyright-social" },
  ],
};

const requestedComponent = process.argv[3];

async function addComponent() {
  const framework = await select({
    message: "Select Framework",
    choices: FRAMEWORKS,
  });

  const type =
    requestedComponent ??
    (await select({
      message: "Select Component",
      choices: COMPONENTS,
    }));

  if (!VARIANTS[type]) {
    throw new Error(`Unknown component: ${type}`);
  }

  const variant = await select({
    message: "Select Variant",
    choices: VARIANTS[type],
  });

  await generateComponent({
    framework,
    type,
    variant,
    target: process.cwd(),
  });
}

await addComponent();
