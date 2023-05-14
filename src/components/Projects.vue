<template>
  <div class="w-full select-none pointer-events-auto">
    <h1 class="font-bold text-3xl text-center my-12">{{ $t('message.projects') }}</h1>
    <div class="grid grid-cols-2 gap-2">
      <Project v-for="project in projects" :project="project" />
    </div>
  </div>

</template>

<script>
import Project from "@/components/Project.vue";
import {useProjectsStore} from "@/stores/projects";

export default {
  name: "Projects",
  components: {Project},
  data() {
    return {
      projects: useProjectsStore().projects
    }
  }
}
</script>

<style scoped>

</style>