import { access } from "node:fs/promises";
import path from "node:path";
import { select } from "@inquirer/prompts";
import { generateComponent } from "../generators/component.js";

const FRAMEWORKS = [
  { name: "HTML", value: "html" },
  { name: "React", value: "react" },
];

const COMPONENTS = [
  { name: "Header", value: "header", frameworks: ["html", "react"] },
  { name: "Hero", value: "hero", frameworks: ["html", "react"] },
  { name: "Footer", value: "footer", frameworks: ["html", "react"] },
  { name: "Text Area", value: "textArea", frameworks: ["react"] },
];

const VARIANTS = {
  header: [
    { name: "Logo + Navigation Links", value: "logo-navigation" },
    {
      name: "Logo + Navigation Links + CTA Button",
      value: "logo-navigation-cta",
    },
    { name: "Navigation Links Only", value: "navigation-only" },
  ],

  hero: [
    {
      name: "Heading + Description + Button",
      value: "heading-description-button",
    },
    {
      name: "Heading + Description + Button + Image",
      value: "heading-description-button-image",
    },
    { name: "Heading + Description Only", value: "heading-description" },
  ],

  footer: [
    { name: "Copyright Only", value: "copyright" },
    {
      name: "Copyright + Navigation Links",
      value: "copyright-navigation",
    },
    { name: "Copyright + Social Links", value: "copyright-social" },
  ],

  textArea: [
    { name: "Basic + Actions Outside", value: "actions-outside"}
  ]
};

const requestedComponent = process.argv[3];

async function isProjectRoot() {
  const packagePath = path.join(process.cwd(), "package.json");

  try {
    await access(packagePath);
    return true;
  } catch {
    return false;
  }
}

async function addComponent() {
  if (!(await isProjectRoot())) {
    console.error(
      "\nPlease run scf from the root directory of your project.\n",
    );
    process.exit(1);
  }

  const requestedDefinition = COMPONENTS.find(
    (component) => component.value === requestedComponent,
  );

  const framework = await select({
    message: "Select Framework",
    choices: requestedDefinition
      ? FRAMEWORKS.filter((frameworkOption) =>
          requestedDefinition.frameworks.includes(frameworkOption.value),
        )
      : FRAMEWORKS,
  });

  const type =
    requestedComponent ??
    (await select({
      message: "Select Component",
      choices: COMPONENTS.filter((component) =>
        component.frameworks.includes(framework),
      ),
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