export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <p className="text-sm text-gray-500">© 2026 Your Company. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="text-sm text-gray-500 hover:text-black">GitHub</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">LinkedIn</a>
          <a href="#" className="text-sm text-gray-500 hover:text-black">X</a>
        </div>
      </div>
    </footer>
  );
}
