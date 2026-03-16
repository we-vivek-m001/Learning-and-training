<template>
    <div>
        <h2>Admin Dashboard</h2>
        <nav>
            <NuxtLink to="/admin">Dashbaord</NuxtLink>
            <NuxtLink to="/">Home</NuxtLink>
        </nav>
        <div style="margin-top:10px;">
             <slot/>
        </div>
    </div>
    </template>