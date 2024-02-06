<template>
    <header class="fixed mt-0 dark:bg-gray-900 z-[9999] h-10 w-screen">
        <nav class="flex justify-between w-full px-5">
            <h1 class="text-2xl font-bold font-custom dark:text-white">TaskTracker</h1>
            <div>
                <DarkModeToggle class="relative top-1"></DarkModeToggle>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DarkModeToggle from './DarkModeToggle.vue'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    DarkModeToggle,
  }
})
</script>
