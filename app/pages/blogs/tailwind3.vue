<template>
  <div class="container mx-auto px-4 py-6">

    <!-- Heading -->
    <h1 class="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
      Tailwind Demo Page
    </h1>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Card -->
      <div
        v-for="(card, i) in cards"
        :key="i"
        class="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
      >

        <!-- Image with Filters -->
        <div class="relative">
          <img
            :src="card.img"
            class="w-full h-40 object-cover grayscale hover:grayscale-0 transition"
          />

          <!-- Position Example -->
          <span class="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            New
          </span>
        </div>

        <!-- Content -->
        <div class="p-4">
          <h2 class="text-lg font-semibold">{{ card.title }}</h2>
          <p class="text-sm text-gray-600 mt-2">
            {{ card.desc }}
          </p>

          <!-- Flex + Interactivity -->
          <div class="flex justify-between items-center mt-4">
            <button
              class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Action
            </button>

            <span class="text-sm text-gray-400 cursor-pointer hover:text-black">
              Details
            </span>
          </div>
        </div>
      </div>

    </div>

    <!-- Columns Example -->
    <div class="mt-10 columns-2 md:columns-3 gap-4">
      <p v-for="n in 6" :key="n" class="mb-4 bg-gray-100 p-3 rounded">
        Column content {{ n }}
      </p>
    </div>

    <!-- Flex Center -->
    <div class="h-40 flex justify-center items-center mt-10 bg-gradient-to-r from-green-300 to-blue-400 rounded-xl">
      <p class="text-white text-lg font-semibold animate-bounce">
        Centered + Animation
      </p>
    </div>

  </div>
</template>

<script setup>
const cards = [
  {
    title: "Card 1",
    desc: "Using grid, flex, and hover effects.",
    img: "https://picsum.photos/400/200?1"
  },
  {
    title: "Card 2",
    desc: "Filters, transitions and transforms.",
    img: "https://picsum.photos/400/200?2"
  },
  {
    title: "Card 3",
    desc: "Responsive and layout utilities.",
    img: "https://picsum.photos/400/200?3"
  }
]
</script>