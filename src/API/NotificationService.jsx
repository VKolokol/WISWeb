import axios from "axios";
import URLs from "./URLs";

export default class NotificationService {

     createNote(formData, setIsSuccess, setIsLoading) {

        axios.post(URLs.task, formData, {
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