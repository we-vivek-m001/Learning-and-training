<template>
  <div class="p-6 space-y-10">

    <!-- 🔹 Typography -->
    <section>
      <h1 class="text-3xl font-bold text-blue-600">Tailwind Basics Demo</h1>
      <p class="text-gray-600 mt-2">This page covers all basic Tailwind utilities</p>
    </section>

    <!-- 🔹 Margin & Padding -->
    <section class="bg-gray-100 p-6">
      <h2 class="text-xl font-semibold mb-4">Margin & Padding</h2>
      <div class="bg-blue-200 p-4 m-4">
        Box with <b>padding (p-4)</b> and <b>margin (m-4)</b>
      </div>
    </section>

    <!-- 🔹 Width & Height -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Width & Height</h2>
      <div class="bg-green-300 w-64 h-32 flex items-center justify-center">
        w-64 h-32
      </div>
    </section>

    <!-- 🔹 Background & Text Colors -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Colors</h2>
      <div class="bg-purple-500 text-white p-4 rounded">
        Background + Text Color
      </div>
    </section>

    <!-- 🔹 Border & Radius -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Border & Radius</h2>
      <div class="border-4 border-red-500 rounded-lg p-4">
        Border + Rounded Corners
      </div>
    </section>

    <!-- 🔹 Flexbox -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Flexbox</h2>
      <div class="flex gap-4">
        <div class="bg-blue-300 p-4 flex-1 text-center">Box 1</div>
        <div class="bg-blue-400 p-4 flex-1 text-center">Box 2</div>
        <div class="bg-blue-500 p-4 flex-1 text-center">Box 3</div>
      </div>
    </section>

    <!-- 🔹 Justify & Align -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Alignment</h2>
      <div class="flex justify-between items-center bg-gray-200 p-4 h-24">
        <span>Left</span>
        <span>Center</span>
        <span>Right</span>
      </div>
    </section>

    <!-- 🔹 Grid -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Grid</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-pink-300 p-4 text-center">1</div>
        <div class="bg-pink-400 p-4 text-center">2</div>
        <div class="bg-pink-500 p-4 text-center">3</div>
      </div>
    </section>

    <!-- 🔹 Shadow -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Shadow</h2>
      <div class="shadow-lg p-6 bg-green-500 rounded">
        Box with shadow
      </div>
    </section>

    <!-- 🔹 Hover Effects -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Hover</h2>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Hover Me
      </button>
    </section>

    <!-- 🔹 Responsive -->
    <section>
      <h2 class="text-xl font-semibold mb-4">Responsive</h2>
      <div class="bg-yellow-300 p-4 text-center md:bg-green-300 lg:bg-red-300">
        Resize screen (sm/md/lg)
      </div>
    </section>

  </div>
</template>

