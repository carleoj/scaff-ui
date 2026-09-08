import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            About
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Projects
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Contact
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg border px-3 py-2 text-sm"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="flex flex-col items-center gap-4 border-t border-gray-200 px-6 py-4 md:hidden">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      )}
    </header>
  );
}