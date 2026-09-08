#!/usr/bin/env node

const command = process.argv[2];

switch (command) {
  case "add":
    await import("../src/commands/add.js");
    break;

  case "list":
    await import("../src/commands/list.js");
    break;

  default:
    console.log("Scaff.js");
    console.log("Ready-made Tailwind frontend components.");
    console.log("");
    console.log("Usage:");
    console.log("  scf add");
    console.log("  scf add header");
    console.log("  scf list");
}
