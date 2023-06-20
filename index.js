const btn = document.querySelector('#calculate');
const currency = document.querySelector('#currency');
const input = document.querySelector('#input');
const url = 'https://api.nbp.pl/api/exchangerates/rates/a/';
const calculateResult = document.querySelector('#calculateResult');

const getCurrencyList = () => {
	if (input.value && Number(input.value) > 0) {
		fetch(`${url}/${currency.value}`)
			.then((response) => response.json())
			.then((data) => {
				const mid = data.rates[0].mid;
				const result = Number(input.value) * mid;
				calculateResult.innerHTML = result.toFixed(2);
			})
			.catch((err) => console.log(err));
	} else alert('Podaj kwotę');
};

btn.addEventListener('click', getCurrencyList);
