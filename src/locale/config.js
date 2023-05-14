import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
        en: {
            message: {
                home: 'Home',
                name: "Abdurasul Khuzhamberdiyev",
                aboutMe: 'About me',
                telegram: 'Telegram',
                github: 'Github',
                mail: 'Mail',
                contacts: 'Contacts',
                portfolio: 'Portfolio',
                projects: 'Projects',
                code: 'code',
                show: 'See'
            }
        },
        ru: {
            message: {
                home: 'Главная страница',
                name: "Абдурасул Хужамбердиев",
                aboutMe: 'Обо мне',
                telegram: 'Телеграм',
                github: 'Гитхаб',
                mail: 'Почта',
                contacts: 'Связаться',
                portfolio: 'Портфолио',
                projects: 'Проекты',
                code: 'код',
                show: 'Посмотреть'
            }
        }
    }
})
export default i18n