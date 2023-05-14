import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
        en: {
            message: {
                hello: 'hello world',
                aboutMe: 'About me'
            }
        },
        ru: {
            message: {
                hello: 'привет мир',
                aboutMe: 'Обо мне'
            }
        }
    }
})
export default i18n