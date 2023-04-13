/*
	- creare un form in cui l'utente inserisca:
	1) Nome
	2) Cognome
	3) Distanza in Km
	4) età
	
	- cliccare per inserire ciascun dato in una costante

	- VERIFICARE:
	- SE distance e age sono numeri e sono maggiori di 0:
		- moltiplicare distance per 0.21 e inserire il risultato nella variabile wholePrice;
		- stampare: "Prezzo pieno: euro" + wholePrice
		- SE age < 18:
			- moltiplicare wholePrice per 0.2 e inserire il risultato nella variabile discountedPrice;
			- stampare: "Il viaggiatore è minorenne: il prezzo scontato del 20% è di euro" + discountedPrice;
			ALTRIMENTI SE age > 65:
				- moltiplicare wholePrice per 0.4 e inserire il risultato nella variabile discountedPrice;
				- stampare: "Il viaggiatore è over-65: il prezzo scontato del 40% è di euro" + discountedPrice;
			FINE SE
		FINE SE
		- stampare: "Non si ha diritto ad alcuno sconto"
	FINE SE
	- stampare: "Uno o entrambi i valori inseriti non sono validi"
*/

let message;
let discountedPrice20;
let discountedPrice40;
let finalPrice;

//Add input to variables
document.querySelector(".btn-submit").addEventListener("click",
	function () {
		const firstName = document.querySelector('#first-name').value;
		const lastName = document.querySelector('#last-name').value;
		const distance = parseFloat(document.querySelector('#distance').value);
		const age = parseInt(document.querySelector('#age').value);

		// calculate whole price = € 0,21 / Km
		let wholePrice = distance * 0.21;

		// calculate discounted prices
		discountedPrice20 = wholePrice - (wholePrice * 0.2);
		discountedPrice40 = wholePrice - (wholePrice * 0.4);

		// round all prices and consider always 2 decimals
		wholePrice = (Math.round((wholePrice + Number.EPSILON) * 100) / 100).toFixed(2);
		discountedPrice20 = (Math.round((discountedPrice20 + Number.EPSILON) * 100) / 100).toFixed(2);
		discountedPrice40 = (Math.round((discountedPrice40 + Number.EPSILON) * 100) / 100).toFixed(2);


		/*
		Guard Clauses: check that all input values are valid
		*/

		if (isNaN(distance) || isNaN(age)) {
			const invalid = document.querySelector('.invalid');
			invalid.classList.remove("invisible");
			invalid.classList.add("visible");
			return;
		}
		else if (distance <= 0 || age <= 0) {
			const negative = document.querySelector('.negative');
			negative.classList.remove("invisible");
			negative.classList.add("visible");
			console.log("sono qui")
			return;
		}


		if (age < 18) {
			defPrice = discountedPrice20;
			const defPrice1 = `Il prezzo del biglietto è di € ${wholePrice}`;
			const defPrice2 = `Lo sconto applicato è del 20%`;
			const defPrice3 = `Il prezzo scontato del biglietto è di € ${defPrice}`;
			document.getElementById('def-price1').innerHTML = defPrice1;
			document.getElementById('def-price2').innerHTML = defPrice2;
			document.getElementById('def-price3').innerHTML = defPrice3;

		} else if (age > 65) {
			defPrice = discountedPrice40;
			const defPrice1 = `Il prezzo del biglietto è di € ${wholePrice}`;
			const defPrice2 = `Lo sconto applicato è del 40%`;
			const defPrice3 = `Il prezzo scontato del biglietto è di € ${defPrice}`;
			document.getElementById('def-price1').innerHTML = defPrice1;
			document.getElementById('def-price2').innerHTML = defPrice2;
			document.getElementById('def-price3').innerHTML = defPrice3;

		} else {
			const defPrice1 = ``;
			const defPrice2 = `Non si ha diritto a sconti`;
			const defPrice3 = `Il prezzo del biglietto è di € ${wholePrice}`;
			document.getElementById('def-price1').innerHTML = defPrice1;
			document.getElementById('def-price2').innerHTML = defPrice2;
			document.getElementById('def-price3').innerHTML = defPrice3;
		}
	}
)
