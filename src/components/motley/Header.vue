<template>
  <header
      id="header" @click="skewIt"
      class="w-screen fixed content-center select-none text-5xl text-white p-5"
  >
    <p :class="{
            'skew-x-[180deg] ease-out duration-1000' : skewByX && skew,
            'skew-y-[180deg] ease-out duration-1000' : skewByY && skew,
        }">WELCOME TO MY PAGE!</p>
  </header>
</template>

<script>
export default {
  data() {
    return {
      skew: false,
      skewByX: true,
      skewByY: false,
    }
  },

  methods: {
    skewIt() {
      this.changeSkewAxis()
      this.skew = !this.skew
      setTimeout(() => {
        this.skew = !this.skew
      }, 1000);
    },

    changeSkewAxis() {
      this.skewByX = !this.skewByX,
          this.skewByY = !this.skewByY
    }
  }

}
</script>
