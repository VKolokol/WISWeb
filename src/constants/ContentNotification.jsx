export default class contentNotification  {

    static success() {
        return {
            image: '/img/Success.svg',
            header: "Уведомление создано",
            text: "Отправить его в Телеграмм",
            btn_text: "СОЗДАТЬ НОВОЕ"
        }
    }
    static error() {
        return {
            image: '/img/illustration-error.svg',
            header: "Что-то пошло не так...",
            text: "Произошла ошибка, попробуйте вернуться на главную и повторить запрос",
            btn_text: "НА ГЛАВНУЮ"
        }
    }
}
