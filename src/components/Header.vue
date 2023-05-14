<template>
  <header class="relative my-2 select-none pointer-events-auto">
    <div class="absolute inset-y-0 right-10">
      <Contact />
    </div>
    <RouterLink id="motley_app" class="absolute inset-y-0 right-64 rounded-lg p-2 text-white" to="motley">
      {{ $t('message.motley_mode') }}
    </RouterLink>
    <a class="absolute inset-y-0 right-36 underline" href="/img/CV.pdf">
      {{ $t('message.cv') }}
    </a>
    <div class="absolute inset-y-0 right-0">
      <a @click.prevent="switchLanguage" class="bg-black text-white m-1 p-1 px-2"> {{this.$i18n.locale}} </a>
    </div>
    <div class="flex text-xl">
      <RouterLink
          class="ml-4 text-blue-500 hover:text-blue-600 p-2 rounded font-bold"
          :class="{'underline' : this.$router.currentRoute.value.name === 'home'}"
          to="/"
      >{{ $t("message.myself") }}</RouterLink>
      <RouterLink
          class="text-blue-500 hover:text-blue-600 p-2 rounded"
          :class="{'underline' : this.$router.currentRoute.value.name === 'portfolio'}"
          to="portfolio"
      >{{ $t('message.portfolio') }}</RouterLink>
    </div>
  </header>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "Header",
  components: {Contact},

  data() {
    return {
      red: 90,
      green: 0,
      blue: 215,
      mi: null,
      sign: true
    }
  },

  methods: {
    switchLanguage() {
      (this.$i18n.locale==='en') ? this.$i18n.locale = 'ru' : this.$i18n.locale = 'en'
    },
  },

  mounted() {
    this.mi = setInterval(() => {
      (this.green < 255 && this.sign)
          ? this.green++
          : this.green--
      if (this.green === 255 || this.green === 0) this.sign = !this.sign
      document.getElementById("motley_app").style.background =
          `linear-gradient(to right, rgb(${this.red}, ${this.green}, ${this.blue}), rgb(${255-this.red}, ${255-this.green}, ${255-this.blue}))`;
    }, 10)
  },

  unmounted() {
    clearInterval(this.mi)
  }
}
</script>

<style scoped>

</style>