export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-semibold">
          Logo
        </a>

        <div className="flex items-center gap-6">
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
          <a
            href="#"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
