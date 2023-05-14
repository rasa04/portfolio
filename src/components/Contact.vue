<template>
  <div class="select-none pointer-events-auto w-fit">
    <a @click.prevent="showContacts"
       class="bg-black text-white m-1 p-1 px-2"
    > {{ $t('message.contacts') }}
    </a>
    <div v-if="contacts" class="bg-gray-200 mt-2 p-1 rounded select-none pointer-events-auto">
      <div class="flex">
        <a class="m-1 hover:text-gray-700 hover:bg-gray-300 rounded" href="https://t.me/rasa035">{{ $t('message.telegram') }}</a><br>
        <a class="m-1 hover:text-gray-700 hover:bg-gray-300 rounded" href="https://t.me/rasa035" target="_blank">
          <font-awesome-icon class="h-2" :icon="['fas', 'arrow-up-right-from-square']" />
        </a><br>
      </div>
      <div class="flex">
        <a class="m-1 hover:text-gray-700 hover:bg-gray-300 rounded" href="https://github.com/rasa04">{{ $t('message.github') }}</a><br>
        <a class="m-1 hover:text-gray-700 hover:bg-gray-300 rounded" href="https://github.com/rasa04" target="_blank">
          <font-awesome-icon class="h-2" :icon="['fas', 'arrow-up-right-from-square']" />
        </a><br>
      </div>
      <div class="flex">
        <a class="m-1 hover:text-gray-700 hover:bg-gray-300 rounded" href="mailto:abdurasul2004.02@gmail.com">{{ $t('message.mail') }}</a><br>
        <a class="m-1 hover:text-gray-700 hover:bg-gray-300 rounded" href="mailto:abdurasul2004.02@gmail.com" target="_blank">
          <font-awesome-icon class="h-2" :icon="['fas', 'arrow-up-right-from-square']" />
        </a><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      contacts: false
    }
  },

  methods: {
    showContacts() {
      this.contacts = !this.contacts
    }
  }
}
</script>

<style scoped>

</style>