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

let discountedPrice20;
let discountedPrice40;


// Click on button
document.querySelector(".btn-submit").addEventListener("click",
	function () {

		//Add input to variables
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
		if (distance <= 0 || age <= 0) {
			const negative = document.querySelector('.negative');
			negative.classList.remove("invisible");
			negative.classList.add("visible");
			return;
		}

		document.querySelector('.p-first-name').innerHTML = firstName;
		document.querySelector('.p-last-name').innerHTML = lastName;
		document.querySelector('.p-age').innerHTML = age;
		document.querySelector('.p-distance').innerHTML = distance;
		document.querySelector('.p-full-price').innerHTML = wholePrice;


		if (age < 18) {
			document.querySelector('.p-discount-percent').innerHTML = "20%";
			document.querySelector('.p-discount-amount').innerHTML = (wholePrice - discountedPrice20).toFixed(2);
			document.querySelector('.p-discount-price').innerHTML = discountedPrice20;

		} else if (age >= 65) {
			document.querySelector('.p-discount-percent').innerHTML = "40%";
			document.querySelector('.p-discount-amount').innerHTML = (wholePrice - discountedPrice40).toFixed(2);
			document.querySelector('.p-discount-price').innerHTML = discountedPrice40;

		} else {
			document.querySelector('.p-discount-percent').innerHTML = "0%";
			document.querySelector('.p-discount-amount').innerHTML = "0";
			document.querySelector('.p-discount-price').innerHTML = wholePrice;
		}
	}
)
// Reset button
document.querySelector(".btn-reset").addEventListener("click",
	function () {
		document.querySelector('#first-name').value = "";
		document.querySelector('#last-name').value = "";
		document.querySelector('#distance').value = "";
		document.querySelector('#age').value = "";
		const invalid = document.querySelector('.invalid');
		invalid.classList.remove("visible");
		invalid.classList.add("invisible");
		const negative = document.querySelector('.negative');
		negative.classList.remove("visible");
		negative.classList.add("invisible");
		return;
	}
)

/*
function reset() {
	document.querySelector('#first-name').value = "";
	document.querySelector('#last-name').value = "";
	document.querySelector('#distance').value = "";
	document.querySelector('#age').value = "";
	const invalid = document.querySelector('.invalid');
	invalid.classList.remove("visible");
	invalid.classList.add("invisible");
	const negative = document.querySelector('.negative');
	negative.classList.remove("visible");
	negative.classList.add("invisible");
}
*/