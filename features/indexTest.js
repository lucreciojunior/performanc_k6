import getCustomer from "./getCustomer.js"
import { group, sleep } from "k6";

export default () => {
    group('Endpoint get customer' , () => {
        getCustomer()
    })
    sleep(1)
}