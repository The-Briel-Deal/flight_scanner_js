import axios from 'axios';
import apiKey from './secrets.js';
import fs from 'fs';
const searchAddr = "https://tequila-api.kiwi.com/v2/search"

axios.get(searchAddr, {
    headers: {
        apikey: apiKey
    },
    params: {
        fly_from: "TPA",
        fly_to: "LAX",
        date_from: "17/04/2022",
        date_to: "17/07/2022",
        one_for_city: "1",
        curr: "USD"
    }
})
    .then((res) => {
        let responseObject = res.data
        fs.writeFile("flight.json", JSON.stringify(responseObject), (error) => {
            if (error) throw error;
            console.log("Request Complete")
        })
    })

// needle.get('https://tequila-api.kiwi.com/v2/search', header = { apikey: apiKey }, {
//     fly_from: 'TPA',
//     date_from: '17/06/2022',
//     date_to: '17/07/2022',
//     one_for_city: '1',
//     curr: 'USD'
// }, (error, response) => {
//     if (!error && response.statusCode == 200) {
//         console.log(response.body);
//     } else {
//         console.log(response.statusCode);
//     }
// });
