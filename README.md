# scaff-ui

Scaffold the UI. Make it your design.

A minimalistic CLI for generating customizable Tailwind CSS components directly into your project.

[Website](https://scaff-ui-site.jimroep.workers.dev) · [GitHub](https://github.com/carleoj/scaff-ui)

## Features

- Generate ready-made frontend components
- Supports React and HTML
- Multiple variants for each component
- Built with Tailwind CSS
- Generates directly into `src/components`
- No unnecessary abstractions

## Requirements

- Node.js 20+
- An existing frontend project
- Tailwind CSS installed and configured

`scaff-ui` does not install or configure Tailwind CSS, React, Vite, or other build tools.

## Installation

Install `scaff-ui` in your existing project:

```bash
npm install scaff-ui
```

## Usage

Run the interactive generator:

```bash
npx scf add
```

Select a framework, component, and variant:

```text
? Select Framework
❯ HTML
  React

? Select Component
❯ Header
  Hero
  Footer

? Select Variant
❯ Logo + Navigation Links
  Logo + Navigation Links + CTA Button
  Navigation Links Only
```

You can also generate a specific component directly:

```bash
npx scf add header
npx scf add hero
npx scf add footer
```

View available components:

```bash
npx scf list
```

## Generated Files

Components are generated into your project's `src/components` directory.

### React

```text
src/
└── components/
    ├── Header.jsx
    ├── Hero.jsx
    └── Footer.jsx
```

### HTML

```text
src/
└── components/
    ├── header.html
    ├── hero.html
    └── footer.html
```

## Components

### Header

Available variants:

- Logo + Navigation Links
- Logo + Navigation Links + CTA Button
- Navigation Links Only

### Hero

Available variants:

- Heading + Description + Button
- Heading + Description + Button + Image
- Heading + Description Only

### Footer

Available variants:

- Copyright Only
- Copyright + Navigation Links
- Copyright + Social Links

## Tailwind CSS

Generated components use Tailwind CSS utility classes.

Scaff UI assumes Tailwind CSS is already installed and configured in your project.

It does not:

- Install Tailwind CSS
- Configure Tailwind CSS
- Install React
- Configure Vite
- Create a project
- Manage build tools

Scaff UI focuses on generating frontend source code that you can modify freely.

## Development

Clone the repository:

```bash
git clone https://github.com/carleoj/scaff-ui.git
cd scaff-ui
npm install
```

Link the package locally:

```bash
npm link
```

Run the CLI:

```bash
scf add
```

Run tests:

```bash
npm test
```

## License

MIT
