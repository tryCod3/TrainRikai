const listEvent = document.getElementsByTagName("input");

for (let i = 0; i < listEvent.length; i++) {
	const t = listEvent[i].id.split("col");
	listEvent[i].addEventListener("input", () => showError(t[1]));
}

function onValidate() {
	if (checkStartAndEndPriod()) {
		const listInput = document.getElementsByClassName("ivalidate");

		for (let i = 0; i < listInput.length; i++) {
			console.log(listInput[i].value);
		}
	}
}

function colValidate(number) {
	arr = [];

	const period1 = +document.getElementById(`col1`).value;
	const period2 = +document.getElementById(`col2`).value;
	if (period1 >= period2) {
		arr.push(`start >= end (${period1} must < ${period2})`);
	}

	const period = document.getElementById(`col${number}`);
	console.log(period);
	const getvalue = +period.value;
	console.log("get", getvalue, typeof getvalue);
	if (typeof getvalue !== "number" || isNaN(getvalue)) {
		arr.push(`${getvalue || "input"} not a number`);
	} else {
		if (Number.isInteger(getvalue) && getvalue <= 0) {
			arr.push(`${getvalue || "input"} mush > 0`);
		}
	}
	return arr;
}

function showError(number) {
	let spanError = document.getElementsByClassName(`col${number}--Error`);
	arr = colValidate(number);
	spanError[0].innerHTML = "";
	const error = document.createElement("ol");
	for (let i = 0; i < arr.length; i++) {
		let t = document.createElement("li");
		t.innerHTML += arr[i];
		error.appendChild(t);
	}
	spanError[0].innerHTML += error.innerHTML;
	if (number == 1) number = 2;
	else if (number == 2) number = 1;
	arr2 = colValidate(number);
	if (arr2.length === 0 && arr.length === 0) {
		console.log(document.getElementById("col4"));
		let q = document.getElementById("col4");
		const total = document.getElementById("total");
		console.log(total);
		q.value =
			+document.getElementById("col2").value -
			+document.getElementById("col1").value;
		if (+q.value >= 0 && +q.value <= 50) {
			total.innerHTML = (+q.value * 1.48 * 100) / 10;
		} else if (+q.value <= 100) {
			total.innerHTML = (+q.value * 1.5) / 0.1;
		} else {
			total.innerHTML = (+q.value * 1.8) / 0.1;
		}
	}
}

function checkStartAndEndPriod() {
	const startPeriod = document.getElementById("col1");
	const endPeriod = document.getElementById("col2");

	const getvalueStart = +startPeriod.value;
	const getValueEnd = +endPeriod.value;

	console.log(typeof getvalueStart, getValueEnd);

	if (!getvalueStart || !Number.isInteger(getvalueStart)) {
		alert(`Error: start-up period not a number`);
		return false;
	}

	if (!getValueEnd || !Number.isInteger(getValueEnd)) {
		alert(`Error: end-of-term period not a number`);
		return false;
	}

	if (getvalueStart <= 0) {
		alert(`Error: start-up mush > 0`);
		return false;
	}

	if (getValueEnd <= 0) {
		alert(`Error: end-of-term mush > 0`);
		return false;
	}

	if (getValueEnd <= getvalueStart) {
		alert(
			`Error: start-up mush small end-of-term (${getvalueStart} < ${getValueEnd})`
		);
	}

	return true;
}
