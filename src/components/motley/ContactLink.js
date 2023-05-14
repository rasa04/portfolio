export default {
    template: `
    <a class="bg-pink-500 shadow-lg shadow-pink-500/100
                rounded-md border-2 border-transparent m-2
                hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/100 hover:text-emerald-100 hover:origin-bottom hover:-rotate-6
                ease-out duration-300 p-1 inline-block" 
            target="_blank" :href="link"
        >{{ name }}</a>
    `,

    props: {
        name: String,
        link: String
    }
}