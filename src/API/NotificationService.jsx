import axios from "axios";


const createNote = (formData, setIsSuccess, setIsLoading) => {
            const testData = {
                "Id": 78912,
                "Customer": "Jason Sweet",
                "Quantity": 1,
                "Price": 18.00
              }
            axios.post('https://reqbin.com/echo/post/json', testData, {
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => {
                setIsSuccess(true)
                })
            .catch(error => {
                setIsSuccess(false)
            }).finally(() => {
                setIsLoading(false)
            })
            

}
export default createNote;