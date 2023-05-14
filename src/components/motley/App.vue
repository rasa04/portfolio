<template>
  <div id="motley_app" class="w-screen h-screen text-center">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.js"
import Content from "./Content.js"
import Footer from "./Footer.js"

export default {
    components: {
        Header,
        Content,
        Footer
    },

    data() {
        return {
            red: 90,
            green: 0,
            blue: 215,
            mi: null,
            sign: true
        }
    },

    mounted() {
        this.mi = setInterval(() => {
            (this.green < 255 && this.sign)
                ? this.green++
                : this.green--
            if (this.green === 255 || this.green === 0) this.sign = !this.sign
            document.getElementById("motley_app").style.background =
                `linear-gradient(to right, rgb(${this.red}, ${this.green}, ${this.blue}), rgb(${255-this.red}, ${255-this.green}, ${255-this.blue}))`;
        }, 10)
    },

    unmounted() {
      clearInterval(this.mi)
    }
}
</script>
