# scaff-ui

Scaffold the UI. Make it yours.

`scaff-ui` is a minimalistic CLI-based frontend component generator for developers who want to speed up development without dropping pre-made, highly opinionated UI into their projects. It generates responsive, customizable implementations of common UI patterns across multiple frontend frameworks, giving developers a practical starting point they can adapt to their project's requirements

## Features

* Generate ready-made frontend components
* Supports HTML and React
* Multiple variants for each component
* Uses Tailwind CSS utility classes
* Generates directly into `src/components`
* No project setup or configuration required
* No unnecessary abstractions

## Requirements

* Node.js 20 or later
* An existing frontend project
* Tailwind CSS already installed and configured

`scaff-ui` does not install or configure Tailwind CSS, React, Vite, or other build tools.

## Installation

Install `scaff-ui` in your existing frontend project:

```bash
npm install scaff-ui
```

## Usage

Run the interactive component generator from your project's root directory:

```bash
npx scf add
```

You will be prompted to select a framework, component, and variant:

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

You can also specify a component directly:

```bash
npx scf add header
npx scf add hero
npx scf add footer
```

To view available components:

```bash
npx scf list
```

## Generated Files

Components are generated inside your project's `src/components` directory.

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

* Logo + Navigation Links
* Logo + Navigation Links + CTA Button
* Navigation Links Only

### Hero

Available variants:

* Heading + Description + Button
* Heading + Description + Button + Image
* Heading + Description Only

### Footer

Available variants:

* Copyright Only
* Copyright + Navigation Links
* Copyright + Social Links

## Tailwind CSS

Generated components use Tailwind CSS utility classes.

`scaff-ui` assumes Tailwind CSS is already installed and configured in your project.

It does not:

* Install Tailwind CSS
* Configure Tailwind CSS
* Install React
* Configure Vite
* Create a project
* Manage build tools

This keeps `scaff-ui` focused on generating frontend source code.

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/carleoj/scaff-ui.git
cd scaff-ui
npm install
```

Link the package locally:

```bash
npm link
```

You can then use the `scf` command while developing:

```bash
scf add
```

Run tests with:

```bash
npm test
```

## License

MIT
