import ContactLink from "./ContactLink.js"

export default {
    components: {
        ContactLink
    },

    template: `
	<footer class="fixed bottom-0 pb-10 w-full text-2xl text-emerald-200 hover:text-emerald-300 ease-out duration-300">
        <contact-link name="Telegram" link="https://rasa035.t.me" />
        <contact-link name="Github" link="https://github.com/rasa04" />
        <contact-link name="Stack Overflow" link="https://stackoverflow.com/users/18183802/rasa" />
        <contact-link name="Instagram" link="https://www.instagram.com/_rasa04/" />
        <contact-link name="Twitter" link="https://twitter.com/Rasa__04" />
	</footer>
    `,

}