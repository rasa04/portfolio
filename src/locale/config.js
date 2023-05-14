import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    messages: {
        en: {
            message: {
                home: 'Home',
                my_name: "Abdurasul Khuzhamberdiyev",
                aboutMe: 'About me',
                telegram: 'Telegram',
                github: 'Github',
                mail: 'Mail',
                contacts: 'Contacts',
                portfolio: 'Portfolio',
                projects: 'Projects',
                code: 'code',
                show: 'See',
                myself: 'Myself',
                statistics: 'Statistics',
                cv: 'CV',
                like: 'I like',
                coding: 'Coding',
                communicate: 'communicate',
                dnd: 'Dungeons & Dragons',
                anime: 'Anime',
                whatImDoing: 'What I am doing',
                skills: 'Skills',
                audience: 'Audience',
                login: 'Login',
                name: 'Name',
                public_repositories: 'Public repositories',
                location: 'Location',
                email: 'Email',
                bio: 'Bio',
                followers: 'Followers',
                following: 'Following',
                since: 'Use github since',
                about_me_text: 'My name is Abdurasul. I\'m 19. I like to walk. Not just the web, everything. I graduated from the Lyceum at TASHIIT with a degree in Database Operator, now I am studying at TUIT.\n' +
                    '        Since there is little useful knowledge at the university, as well as at the lyceum, I quickly got used to learning everything on my own.\n' +
                    '        I study everything new exclusively from documentation and articles in the vastness of the web. Most of all I understand web development, and telegram bots (I wrote the best framework after all :).',
                motley_mode: 'Motley mode'
            }
        },
        ru: {
            message: {
                home: 'Главная страница',
                my_name: "Абдурасул Хужамбердиев",
                aboutMe: 'Обо мне',
                telegram: 'Телеграм',
                github: 'Гитхаб',
                mail: 'Почта',
                contacts: 'Связаться',
                portfolio: 'Портфолио',
                projects: 'Проекты',
                code: 'код',
                show: 'Посмотреть',
                myself: 'Я',
                statistics: 'Статистика',
                cv: 'Резюме',
                like: 'Нравиться',
                coding: 'Кодить',
                communicate: 'Общаться',
                dnd: 'Подъземелья и драконы',
                anime: 'Аниме',
                whatImDoing: 'Что я делаю',
                skills: 'Навыки',
                audience: 'Аудитория',
                login: 'Логин',
                name: 'Имя',
                public_repositories: 'Публичные репозитории',
                location: 'Местонахождение',
                email: 'Почта',
                bio: 'Био',
                followers: 'Подписчики',
                following: 'Подписки',
                since: 'В гитхабе',
                about_me_text: 'Меня зовут Абдурасул. Мне 19. Люблю кодить. Не только веб, вообще все. Окончил лицей при ТашИИТ по специальности Оператор Баз Данных, сейчас учусь в ТУИТ.\n' +
                    '        Так как в университете как и в лицее полезных знаний мало, я довольно быстро привык все учить самостоятельно.\n' +
                    '        Все новое изучаю исключительно по документации и статьям в просторах паутины. Больше всего разбираюсь в веб-разработке, и в телеграмм ботах (написал самый лучшый фреймворк как никак:).',
                motley_mode: 'Пестрый режим'
            }
        }
    }
})
export default i18n