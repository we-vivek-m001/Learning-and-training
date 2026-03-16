<template>
    <div>
        <header style = "background: lightblue; padding:18px;">
            <h2>site header</h2>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/products/admin">admin</NuxtLink>
        </header>
        <main style="padding:10px;">
            <slot />
        </main>
        <footer style="background: lightgreen; padding: 18px;">
            <p>site footer</p>
        </footer>
    </div>
    </template>