import fetch from "node-fetch";
// const fetch = require('node-fetch')

async function makeRequestAndTakeResult() {
    const url = 'https://zdkhiu5mp5dwa.elma365.ru/pub/v1/app/test_sreda/test_task/list';
    const bearer = '6b2a6b4c-51c4-4beb-94b8-250d12d023b1';
    const data = {
        "fileHash": "0190983f-d7be-7895-bc40-5f403f0bc287",
        "format": "xlsx",
        "withEventHandlers": false
    }      

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearer}`
        },
        body: JSON.stringify(data)
    };

    // Запрос
    try {
        const response = await fetch(url, options);
        const responseData = await response.json();

        // Обработка ответа
        const answer = responseData.result.result[0].__name;
        return answer;
    } 
    catch (error) {
        console.error('Error:', error);
        return -1;
    }
}

const res = await makeRequestAndTakeResult();
console.log('Ответ на поставленный вопрос:')
console.log(res)