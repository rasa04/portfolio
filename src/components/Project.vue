<template>
  <div class="bg-white shadow rounded-lg overflow-hidden border-b-2">
    <a class="block p-4 sm:p-6 hover:bg-gray-100" :href="project.visit">
      <h3 class="text-2xl leading-6 font-medium text-gray-900">{{ project.name }}</h3>
      <p class="mt-2 max-w-4xl text-sm text-gray-500">{{ project.description }}</p>
    </a>
    <div class="-mt-px items-center p-4 sm:p-6">
      <div class="flex items-center mb-1">
        <font-awesome-icon :icon="['fas', 'cubes']" />
        <div class="ml-2 text-sm font-medium text-gray-900">{{ project.technologies }}</div>
      </div>
      <div class="flex items-center mb-1">
          <a :href="project.github" target="_blank">
            <font-awesome-icon :icon="['fas', 'code-branch']" />
          </a>
          <a class="ml-1 text-sm font-medium rounded underline hover:font-bold transition duration-100"
             :href="project.github"
          > {{ $t('message.code') }} </a>
      </div>
      <div class="flex items-center mb-1">
        <font-awesome-icon :icon="['fas', 'users']" />
        <p class="ml-1">{{ $t('message.audience') }}: {{ project.audience }}</p>
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