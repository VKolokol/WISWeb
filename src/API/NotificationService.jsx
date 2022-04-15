import React from "react";
import axios from "axios";

export default class NotificationService {
    constructor() {
        this.formData = {
            "execution_time": "2022-04-15T16:55:00",
            "responsible": "Диана Юсупова",
            "type_task": 0,
            "title": "Собес ZOOM",
            "full_name" : "Вася Пупкин",
            "master": "Никита Ляхов",
            "ids_receivers": 1

        }

    }
     createNote(formData, setIsSuccess, setIsLoading) {
        formData.append("ids_receivers", 1)
         formData.append("type_task", 0)

        axios.post('http://10.20.20.140:8000/task/', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            }).then(response => {
                setIsSuccess(true)
                })
            .catch(error => {
                console.log(error)
                setIsSuccess(false)
            }).finally(() => {
                setIsLoading(false)
            })

    }
}

// export default createNote;