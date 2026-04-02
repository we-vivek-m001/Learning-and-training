<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

// Dark mode toggle
onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  document.documentElement.classList.toggle('dark', isDark.value)
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div class="min-h-screen p-6 bg-white text-black dark:bg-gray-900 dark:text-white">

    <!-- 🔹 Dark Mode Toggle -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Tailwind Demo</h1>
      <button 
        @click="toggleTheme"
        class="btn-primary">
        Toggle Dark Mode
      </button>
    </div>

    <!-- 🔹 Spacing (margin, padding, space) -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Spacing</h2>
      <div class="bg-blue-100 p-4 space-y-2">
        <div class="bg-blue-300 p-2">Item 1</div>
        <div class="bg-blue-400 p-2">Item 2</div>
      </div>
    </section>

    <!-- 🔹 Grid + Breakpoints -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Responsive Grid</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="i in 8" :key="i" class="bg-green-200 p-4 text-center rounded">
          Card {{ i }}
        </div>
      </div>
    </section>

    <!-- 🔹 Dark Mode UI -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Dark Mode Styling</h2>
      <div class="p-4 bg-gray-200 dark:bg-gray-700 rounded">
        This box changes in dark mode
      </div>
    </section>

    <!-- 🔹 Custom Buttons (Bootstrap-like) -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Buttons</h2>
      <div class="flex gap-4">
        <button class="btn-primary">Primary</button>
        <button class="btn-secondary">Secondary</button>
        <button class="btn-danger">Danger</button>
      </div>
    </section>

    <!-- 🔹 Custom Cards -->
    <section>
      <h2 class="text-xl font-semibold mb-2">Custom Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="card">
          <img src="https://picsum.photos/300/200" class="w-full h-40 object-cover rounded" />
          <h3 class="font-bold mt-2">Card {{ i }}</h3>
          <p class="text-sm">This is a reusable card</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 🔹 Custom Classes using @apply */
@layer components {

  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition;
  }

  .btn-secondary {
    @apply bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition;
  }

  .btn-danger {
    @apply bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition;
  }

  .card {
    @apply bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition;
  }
}
</style>