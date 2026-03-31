<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Container -->
    <div class="max-w-screen-xl mx-auto px-4 py-10">
      <!-- Heading -->
      <h1 class="text-3xl font-bold text-center mb-10">Tailwind Practice UI</h1>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in content"
          :key="item.name"
          class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
        >
          <!-- Image Section -->
          <div class="flex items-center justify-center h-40" :class="item.iconBG">
            <img
              :src="item.icon"
              :alt="item.alt"
              :style="{ height: item.imgHeight + 'px', width: item.imgWidth + 'px' }"
              class="object-contain"
            />
          </div>

          <!-- Content -->
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ item.name }}</h2>
            <p class="text-gray-600 text-sm mb-4">{{ item.text }}</p>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-2">
              <a
                v-for="btn in item.buttons"
                :key="btn.text"
                :href="btn.link"
                target="_blank"
                class="px-3 py-1 text-sm rounded border transition"
                :class="item.appendClass"
              >
                {{ btn.text }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Extra Section: Centered Box -->
      <div class="mt-16 max-w-md mx-auto bg-blue-500 text-white p-6 rounded-lg text-center">
        <h3 class="text-xl font-bold">Centered Box</h3>
        <p class="mt-2">Using mx-auto + padding + rounded</p>
      </div>

      <!-- Hover Image Effect -->
      <div class="mt-16 overflow-hidden rounded-lg w-64 mx-auto">
        <img
          src="https://picsum.photos/400"
          class="w-full hover:scale-110 transition duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const content = [
  {
    icon: "/images/officialCardLaravel.webp",
    imgHeight: 56,
    imgWidth: 55,
    iconBG: "bg-red-500",
    name: "Laravel",
    text: "Official Laravel partner providing development and support.",
    buttons: [
      { text: "Services", link: "#" },
      { text: "Learn More", link: "#" },
    ],
    alt: "Laravel Icon",
    appendClass:
      "border-red-500 hover:bg-red-500 hover:text-white",
  },
  {
    icon: "/images/icons/flutter-dark.webp",
    imgHeight: 45,
    imgWidth: 45,
    iconBG: "bg-blue-500",
    name: "Flutter",
    text: "Build beautiful apps with Flutter framework.",
    buttons: [
      { text: "Services", link: "#" },
      { text: "Learn More", link: "#" },
    ],
    alt: "Flutter Icon",
    appendClass:
      "border-blue-500 hover:bg-blue-500 hover:text-white",
  },
  {
    icon: "/images/officialCardVue.webp",
    imgHeight: 45,
    imgWidth: 55,
    iconBG: "bg-green-500",
    name: "Vue",
    text: "Powerful frontend framework for modern apps.",
    buttons: [
      { text: "Services", link: "#" },
      { text: "Learn More", link: "#" },
    ],
    alt: "Vue Icon",
    appendClass:
      "border-green-500 hover:bg-green-500 hover:text-white",
  },
];
</script>

<style>
/* No custom CSS needed - Tailwind only */
</style>
