<template>
  <Header />
  <main>
    <div class="text-2xl font-bold text-center my-8">
      {{ $t('message.statistics') }}
    </div>
    <h2 class="font-bold text-center">Github</h2>
    <div class="w-full h-fit bg-gray-200 grid grid-cols-2" v-if="this.user !== null">
      <div>
        <img :src="this.user.avatar_url">
      </div>
      <div class="pointer-events-auto select-none p-2">
        <ul>
          <li>ID: {{ this.user.id }}</li>
          <li>{{ $t('message.login') }}: {{ this.user.login }}</li>
          <li>{{ $t('message.name') }}: {{ this.user.name }}</li>
          <li class="flex">{{ $t('message.public_repositories') }}: <p class="font-medium">{{ this.user.public_repos }}</p></li>
          <li>{{ $t('message.location') }}: {{ this.user.location }}</li>
          <li>{{ $t('message.email') }}: {{ this.user.email }}</li>
          <li>{{ $t('message.bio') }}: {{ this.user.bio }}</li>
          <li>{{ $t('message.followers') }}: {{ this.user.followers }}</li>
          <li>{{ $t('message.following') }}: {{ this.user.following }}</li>
          <li>{{ $t('message.since') }}: {{new Date(this.user.created_at)}}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style>

</style>
<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  components: {Header},

  data() {
    return {
      token: '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',
      user: null
    }
  },

  created() {
    axios.get('https://api.github.com/users/rasa04', {
        headers: {
          Authorization: `token ${this.token}`
        }
      })
      .then(response => {
        this.user = response.data
      })
  }
}
</script>