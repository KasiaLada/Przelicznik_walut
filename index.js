const currency = document.querySelector('#currency');
const input = document.querySelector('#input');
const form = document.getElementById('form');
const url = 'https://api.nbp.pl/api/exchangerates/rates/a/';
const calculateResult = document.querySelector('#calculateResult');

const getCurrencyList = (event) => {
	event.preventDefault();
	if (input.value && Number(input.value) > 0) {
		fetch(`${url}/${currency.value}`)
			.then((response) => response.json())
			.then((data) => {
				const mid = data?.rates[0]?.mid;

				if (!mid) {
					window.alert('Błąd pobierania danych z NBP');
					return;
				}

				const result = Number(input.value) * mid;
				calculateResult.innerHTML = result.toFixed(2);
			})
			.catch((err) => window.alert(err));
	} else {
		alert('Podaj kwotę');
	}
};

form.addEventListener('submit', getCurrencyList);
