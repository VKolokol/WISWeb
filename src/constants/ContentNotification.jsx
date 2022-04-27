export default class contentNotification  {

    static success = {
            image: '/img/Success.svg',
            btn_text: "СОЗДАТЬ НОВОЕ",
    }
    static interview() {
        return {
            ...this.success,
            header: "Уведомление создано",
            text: "Отправить его в Телеграмм",
            link: '/notification-about-interview'
        }
    }
    static workFromHome() {
        return {
            ...this.success,
            header: "Запрос отправлен",
            text: "Спасибо, что предупредили заранее",
            link: '/notification-about-work'
        }
    }
    static error() {
        return {
            image: '/img/illustration-error.svg',
            header: "Что-то пошло не так...",
            text: "Произошла ошибка, попробуйте вернуться на главную и повторить запрос",
            btn_text: "НА ГЛАВНУЮ",
            link: ''
        }
    }
}
