<template>
  <header class="relative w-screen my-2">
    <div class="absolute inset-y-0 right-0">
      <a @click.prevent="switchLanguage"
         class="bg-black text-white m-1 p-1 px-2 select-none pointer-events-auto"
      > {{this.$i18n.locale}} </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    switchLanguage() {
      (this.$i18n.locale==='en') ? this.$i18n.locale = 'ru' : this.$i18n.locale = 'en'
    }
  }
}
</script>

<style scoped>

</style>