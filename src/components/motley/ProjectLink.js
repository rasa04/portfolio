export default {
    template:`
    <a 
    class="bg-cyan-500 shadow-lg shadow-cyan-500/100
        rounded-md border-2 border-transparent uppercase
        hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/100 hover:text-emerald-100 hover:origin-bottom hover:-rotate-6
        ease-out duration-300 p-1 m-2 inline-block" 
    target="_blank" :href="project.visit"
>{{ project.name }}</a>
    `,

    props: {
        project: Object
    }
}