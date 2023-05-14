import ProjectLink from "./ProjectLink.js"
import {useProjectsStore} from "@/stores/projects";

export default {
    components: {
        ProjectLink
    },

    data() {
        return {
            projects: useProjectsStore().projects
        }
    },

    template: `
	<div id="content" class="bg-inherit text-4xl pt-32 text-emerald-200 hover:text-emerald-200/[.70] no-underline ease-out duration-500">
        <project-link v-for="project in projects" :project="project" />
	</div>
    `,

}