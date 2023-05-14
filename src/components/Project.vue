<template>
  <div class="bg-white shadow rounded-lg overflow-hidden border-b-2">
    <div class="p-4 sm:p-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">{{ project.name }}</h3>
      <p class="mt-2 max-w-4xl text-sm text-gray-500">{{ project.description }}</p>
    </div>
    <div class="-mt-px flex justify-between items-center p-4 sm:p-6">
      <div class="flex items-center">
        <font-awesome-icon :icon="['fas', 'cubes']" />
        <div class="ml-2 text-sm font-medium text-gray-900">{{ project.technologies }}</div>
      </div>
      <div>
          <a class="m-1" :href="project.visit"> {{ $t('message.show') }} </a>
          <font-awesome-icon :icon="['fas', 'eye']" />
        |
          <a class="m-1" :href="project.github"> {{ $t('message.code') }} </a>
          <font-awesome-icon :icon="['fas', 'code-branch']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>