import React from "react";

export default function base() {
  return (
    <div className="mx-auto max-w-sm">
      <label htmlFor="Notes">
        <span className="text-sm font-medium text-gray-700">Notes</span>

        <div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 shadow-sm focus-within:ring focus-within:ring-blue-600">
          <textarea
            id="Notes"
            className="w-full resize-none border-none outline-none focus:ring-0 sm:text-sm"
            rows="4"
          />

          <div className="flex items-center justify-end gap-2 p-1.5">
            <button
              type="button"
              className="rounded border border-transparent px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Clear
            </button>

            <button
              type="button"
              className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
            >
              Save
            </button>
          </div>
        </div>
      </label>
    </div>
  );
}
