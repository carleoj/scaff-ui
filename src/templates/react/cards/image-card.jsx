import React from 'react'

export default function ImageCard() {
  return (
    <section className="mx-auto w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-5xl rounded-2xl text-center px-4 transition-all duration-300">
      <div className="grid grid-cols-[1fr_2fr] w-full">
        <div className="bg-gray-300 px-8 py-10 rounded-l-xl">
          Left
        </div>

        <div className="bg-gray-200 px-8 py-10 rounded-r-xl">
          Right
        </div>
      </div>
    </section>
  )
}