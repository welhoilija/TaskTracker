import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DarkModeToggle',
  setup () {
    const isDarkMode = ref(false)

    const toggleDarkMode = (): void => {
      isDarkMode.value = !isDarkMode.value
      document.documentElement.classList.toggle('dark', isDarkMode.value)
    }

    return { isDarkMode, toggleDarkMode }
  }
})
