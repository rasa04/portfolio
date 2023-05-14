<template>
  <Header />
  <main class="select-none pointer-events-auto grid grid-cols-4 mt-12">
    <div class="col-span-3">
      <div class="text-3xl font-bold text-center mb-4">
        {{ $t('message.whatImDoing') }}
      </div>
      <div class="ml-12 text-lg">
        {{ $t('message.about_me_text') }}
      </div>
    </div>
    <div class="border-l border-black">
      <div class="m-2">
        <div class="text-xl font-bold">
          {{ $t('message.like') }}
        </div>
        <ul class="">
          <li class="">{{ $t('message.coding') }}</li>
          <li class="">{{ $t('message.communicate') }}</li>
          <li class="">{{ $t('message.dnd') }}</li>
          <li class="">{{ $t('message.anime') }}</li>
        </ul>
      </div>
      <div class="m-2">
        <div class="text-xl font-bold">
          {{ $t('message.skills') }}
        </div>
        <p class="font-medium">php, laravel, VueJs, Linux, Nginx, Docker, Git, API, REST Api, Websockets, Swagger, Telegram Bot Api, SQL, TDD</p>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Contact from "@/components/Contact.vue";
import Projects from "@/components/Projects.vue";

export default {
  components: {Projects, Contact, Header}
}
</script>
