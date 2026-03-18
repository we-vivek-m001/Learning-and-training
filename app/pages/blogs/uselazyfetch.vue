<script setup>
const { data, pending, error, execute } = useLazyFetch(
  'https://jsonplaceholder.typicode.com/posts'
)

const logData = () => {
  console.log("Data:", data.value)
}
</script>

<template>
  <button @click="execute">Fetch Data</button>

  <p v-if="pending">Loading...</p>
  <p v-else-if="error">Error</p>

  <div v-else>
    <div v-for="post in data" :key="post.id">
      <p>{{ post.title }}</p>
    </div>
  </div>

  <button @click="logData">Log Data</button>
</template>