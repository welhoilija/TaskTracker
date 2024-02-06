<template>
    <label class="toggle-container inline-flex items-center cursor-pointer select-none">
        <span class="absolute left-2 transform -translate-y-1/2 top-1/2">
            🌙
        </span>

        <input type="checkbox" value="" class="sr-only peer" @change="toggleDarkMode">
        <div
            class="z-5 toggle-switch w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:z-10 after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
        <span class="absolute right-1 transform -translate-y-1/2 top-1/2">
            ☀️
        </span>
    </label>
</template>
<script lang="ts" src="./DarkModeToggle.tsx"></script>
