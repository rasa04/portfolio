import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state:() => ({
    projects: [
      {
        name: 'rickbot',
        description: 'telegram bot',
        technologies: 'php | telekit library | Postgres | Telegram Bot Api',
        github: 'https://github.com/rasa04/telekit',
        visit: 'https://t.me/rickbot',
        audience: '200+'
      },
      {
        name: 'store',
        description: 'Online shopping site',
        technologies: 'php | laravel | VueJS | Mysql | Tailwind',
        github: 'https://github.com/rasa04/hypershop',
        visit: 'https://rasa.uz/store',
        audience: '-'
      },
      {
        name: 'telekit',
        description: 'Framework for creating telegram bots',
        technologies: 'php | Eloquent ORM | Symfony console | GuzzleHttp',
        github: 'https://github.com/rasa04/telekit',
        visit: 'https://packagist.org/packages/rasa/telekit',
        audience: '-'
      },
      {
        name: 'rgb',
        description: 'RGB tool',
        technologies: 'VueJS',
        github: 'https://github.com/rasa04/rgb',
        visit: 'https://rasa.uz/rgb',
        audience: '-'
      }
    ]
  })

})
