import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startSpinner } from "../utils/spinner.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const FILE_NAMES = {
  html: {
    header: "header.html",
    hero: "hero.html",
    footer: "footer.html",
  },
  react: {
    header: "Header.jsx",
    hero: "Hero.jsx",
    footer: "Footer.jsx",
  },
};

function getTemplatePath(framework, type, variant) {
  return path.join(
    __dirname,
    "..",
    "templates",
    framework,
    type,
    `${variant}.${framework === "react" ? "jsx" : "html"}`,
  );
}

function getOutputPath(framework, type, target) {
  return path.join(
    target,
    "src",
    "components",
    FILE_NAMES[framework][type],
  );
}

export async function generateComponent({
  framework,
  type,
  variant,
  target,
}) {
  const templatePath = getTemplatePath(framework, type, variant);
  const outputPath = getOutputPath(framework, type, target);

  const spinner = startSpinner(`Adding ${type}...`);

  try {
    const template = await fs.readFile(templatePath, "utf8");

    await fs.mkdir(path.dirname(outputPath), {
      recursive: true,
    });

    await fs.writeFile(outputPath, template, "utf8");
  } finally {
    spinner();
  }

  console.log(`✓ Created ${path.relative(target, outputPath)}`);
}
