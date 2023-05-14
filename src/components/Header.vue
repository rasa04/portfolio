<template>
  <header class="relative my-2 select-none pointer-events-auto">
    <div class="absolute inset-y-0 right-10">
      <Contact />
    </div>
    <div class="absolute inset-y-0 right-0">
      <a @click.prevent="switchLanguage" class="bg-black text-white m-1 p-1 px-2"> {{this.$i18n.locale}} </a>
    </div>
    <RouterLink
        class="text-blue-500 hover:text-blue-600 p-2 rounded"
        :class="{'underline' : this.$router.currentRoute.value.name === 'home'}"
        to="/"
    >{{ $t("message.home") }}</RouterLink>
    <RouterLink
        class="text-blue-500 hover:text-blue-600 p-2 rounded"
        :class="{'underline' : this.$router.currentRoute.value.name === 'about'}"
        to="about"
    >{{ $t('message.aboutMe') }}</RouterLink>
    <RouterLink
        class="text-blue-500 hover:text-blue-600 p-2 rounded"
        :class="{'underline' : this.$router.currentRoute.value.name === 'portfolio'}"
        to="portfolio"
    >{{ $t('message.portfolio') }}</RouterLink>
  </header>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "Header",
  components: {Contact},

  methods: {
    switchLanguage() {
      (this.$i18n.locale==='en') ? this.$i18n.locale = 'ru' : this.$i18n.locale = 'en'
    },
  }
}
</script>

<style scoped>

</style>