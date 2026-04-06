<template>
  <div class="min-h-screen bg-[#0b001a] text-white p-8 space-y-10">

    <!-- Title -->
    <h1 class="text-3xl font-semibold">What I Learned Today</h1>

    <!-- Hero Section -->
    <section class="hero-card p-8 flex justify-between items-center">
      <div class="max-w-md">
        <h2 class="text-2xl font-semibold mb-3">
          UI/UX That Speaks to Your Audience
        </h2>
        <p class="text-white/70 text-sm mb-4">
          Built a hero section using gradients, layout alignment, and glass effects.
        </p>
        <button class="btn-primary">Start Today</button>
      </div>

      <div class="w-[200px] h-[200px] bg-purple-600/40 blur-3xl rounded-full"></div>
    </section>

    <!-- Sidebar Concept -->
    <section class="space-y-4">
      <h2 class="text-xl font-medium">Sidebar Implementation</h2>
      <div class="p-6 bg-white/5 rounded-xl border border-white/10">
        <ul class="space-y-2 text-white/70">
          <li>• Created sticky sidebar</li>
          <li>• Added collapse/expand functionality</li>
          <li>• Used flex layout instead of absolute positioning</li>
        </ul>
      </div>
    </section>

    <!-- Nuxt Features -->
    <section class="space-y-4">
      <h2 class="text-xl font-medium">Nuxt Concepts</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="card">
          <h3 class="font-medium">NuxtLink</h3>
          <p class="text-sm text-white/60">Client-side navigation</p>
        </div>

        <div class="card">
          <h3 class="font-medium">Dynamic Component</h3>
          <p class="text-sm text-white/60">&lt;component :is="" /&gt;</p>
        </div>
      </div>
    </section>

    <!-- Tailwind Learning -->
    <section class="space-y-4">
      <h2 class="text-xl font-medium">Tailwind Learnings</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="card">Reusable components</div>
        <div class="card">@apply usage</div>
        <div class="card">Glass UI</div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.hero-card {
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  background: linear-gradient(31.78deg, rgba(1,3,20,0.4), rgba(43,1,82,0.4));
}

.btn-primary {
  padding: 8px 20px;
  border-radius: 9999px;
  border: 1px solid rgba(255,255,255,0.2);
}

.card {
  padding: 16px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
}
</style>
