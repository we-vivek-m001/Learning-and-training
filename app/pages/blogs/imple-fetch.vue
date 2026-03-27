<script setup lang="ts">

// 1️⃣ useFetch (SSR - blocking)
const { data: productsSSR, pending: pendingSSR, error: errorSSR } =
  await useFetch('https://jsonplaceholder.typicode.com/posts')


// 2️⃣ useFetch (non-blocking - client reactive)
const { data: productsClient, pending: pendingClient } =
  useFetch('https://jsonplaceholder.typicode.com/posts')


// 3️⃣ useAsyncData (custom logic + key)
const { data: asyncProducts, pending: pendingAsync } =
  await useAsyncData('products-list', () => {
    return $fetch('/items/')
  })


// 4️⃣ $fetch (manual call - button click)
const manualData = ref(null)
const loadingManual = ref(false)

const fetchManually = async () => {
  loadingManual.value = true
  manualData.value = await $fetch('/api/products')
  loadingManual.value = false
}

</script>

<template>
  <div style="padding: 20px">

    <h1>Nuxt Data Fetching Demo</h1>

    <!-- 1️⃣ SSR useFetch -->
    <section>
      <h2>1. useFetch (SSR - await)</h2>
      <div v-if="pendingSSR">Loading...</div>
      <div v-else-if="errorSSR">Error occurred</div>
      <pre v-else>{{ productsSSR }}</pre>
    </section>

    <hr />

    <!-- 2️⃣ Client useFetch -->
    <section>
      <h2>2. useFetch (Client - no await)</h2>
      <div v-if="pendingClient">Loading...</div>
      <pre v-else>{{ productsClient }}</pre>
    </section>

    <hr />

    <!-- 3️⃣ useAsyncData -->
    <section>
      <h2>3. useAsyncData</h2>
      <div v-if="pendingAsync">Loading...</div>
      <pre v-else>{{ asyncProducts }}</pre>
    </section>

    <hr />

    <!-- 4️⃣ $fetch manual -->
    <section>
      <h2>4. $fetch (Manual Trigger)</h2>
      <button @click="fetchManually">Fetch Data</button>

      <div v-if="loadingManual">Loading...</div>
      <pre v-else-if="manualData">{{ manualData }}</pre>
    </section>

  </div>
</template>