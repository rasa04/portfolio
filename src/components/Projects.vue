<template>
  <div class="w-full select-none pointer-events-auto">
    <h1 class="font-bold text-3xl text-center mt-12">{{ $t('message.projects') }}</h1>
    <Project v-for="project in projects" :project="project" />
  </div>

</template>

<script>
import Project from "@/components/Project.vue";

export default {
  name: "Projects",
  components: {Project},
  data() {
    return {
      projects: [
        {
          name: 'rickbot',
          description: 'telegram bot',
          technologies: 'php | telekit library | Postgres | Telegram Bot Api',
          github: 'https://github.com/rasa04/telekit',
          visit: 'https://t.me/rickbot'
        },
        {
          name: 'store',
          description: 'Online shopping site',
          technologies: 'php | laravel | VueJS | Mysql | Tailwind',
          github: 'https://github.com/rasa04/hypershop',
          visit: 'https://rasa.uz/store'
        },
        {
          name: 'telekit',
          description: 'Framework for creating telegram bots',
          technologies: 'php | Eloquent ORM | Symfony console | GuzzleHttp',
          github: 'https://github.com/rasa04/telekit',
          visit: 'https://packagist.org/packages/rasa/telekit'
        },
        {
          name: 'store',
          description: 'Online shopping site',
          technologies: 'php | laravel | VueJS',
          github: 'https://github.com/rasa04/hypershop',
          visit: 'https://rasa.uz/store'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>