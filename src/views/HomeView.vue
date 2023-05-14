<template>
  <Header />
  <main>
    <RouterLink
        class="text-blue-500 hover:text-blue-600 underline p-2 rounded"
        to="about"
    >{{ $t("message.aboutMe") }}</RouterLink>
    <div>
      Hi {{ $t("message.hello") }}
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {Header}
}
</script>
