let currency = ['usd', 'eur'];
let exchange = [42, 40];


while (true) {
    let choice = prompt('1. Курс валют; 2. Обмін валюти 3. Вихід');
    
    if (choice == '1') {
        exchangeRates();
    } else if (choice == '2') {
        currencyExchange();
    } else if (choice == '3') {
        userExit();
        break;
    }
}

//function
function exchangeRates() {
    for (let i = 0; i < exchange.length; i ++) {
        alert(`${currency[i]} ${exchange[i]} грн`);
    }
}

function currencyExchange() {
    let enteredСurrency = (prompt('Оберіть валюту для обміну: usd или eur').toLowerCase());
    enteredСurrency = enteredСurrency.trim();
    if (enteredСurrency == currency [0]){
        let usdСurrency = Number(prompt('Яку суму грн, бажаєте обміняти на ' + enteredСurrency));
        if (usdСurrency >= 1){
            let usdSumm = usdСurrency/exchange[0];
            alert('Ви отримаєте: ' + usdSumm + currency [0]);
        } else  {
           alert('Введіть суму більше 0');
        }
    } else if (enteredСurrency == currency [1]) {
        let eurСurrency = Number(prompt('Яку суму грн, бажаєте обміняти на ' + enteredСurrency));
        if (eurСurrency >= 1){
            let eurSumm = eurСurrency/exchange[1];
            alert('Ви отримаєте: ' + eurSumm + currency [1]);
        } else  {
            alert('Введіть суму більше 0');
         }
    } else {
        alert( enteredСurrency + ' відсутня в обміннику ! Оберіть usd або eur');
     }
}

function userExit() {
    alert('Вихід');
}
