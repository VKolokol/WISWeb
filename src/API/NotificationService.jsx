import axios from "axios";

export default class NotificationService {

     createNote( url, formData, setIsSuccess, setIsLoading) {

        axios.post(url, formData, {
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