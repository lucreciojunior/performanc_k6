import http from 'k6/http';
import { sleep, check, fail } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export let GetCustomerDuration = new Trend('get_customer_duration'); // tempo de mile segundos da requicição
export let GetGustomerFailRate = new Rate('get_customer_fail_rate'); // % de falha do teste
export let GetCustomerSucessRate = new Rate('get_customer_sucess_rate'); // % de sucesso do teste
export let GetCustomerResq = new Rate('get_customer_resq'); // 

// export function handleSummary(data) {
//   return {
//     "report.html": htmlReport(data),
//   };
// }

export default function () {
    let res = http.get('https://serverest.dev/usuarios')

    GetCustomerDuration.add(res.timings.duration)
    GetCustomerResq.add(1)
    GetGustomerFailRate.add(res.status ==0 || res.status > 399)
    GetCustomerSucessRate.add(res.status < 399)

    let durationMsg = 'Max duration ${1000/1000}s'
    if(!check(res, {
        'max duration': (r) => r.timings.duration < 1000,
    })){
        fail(durationMsg)
    }
    sleep(1)
}