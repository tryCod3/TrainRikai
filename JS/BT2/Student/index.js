const defineArr = [
	{
		name: "Nguyen Van A",
		score: 10,
	},
	{
		name: "Nguyen Van B",
		score: 6.8,
	},
	{
		name: "Nguyen Van C",
		score: 4.7,
	},
	{
		name: "Nguyen Van D",
		score: 6.7,
	},
	{
		name: "Nguyen Van E",
		score: 8.9,
	},
];
var sortdesc = true;

function load(arr = defineArr) {
	const getRoot = document.getElementById("root");
	getRoot.innerHTML = "";
	const list = document.createElement("ul");
	const item = document.createElement("li");
	for (let i = 0; i < arr.length; i++) {
		item.innerHTML += `<li>${arr[i].name} ${arr[i].score} </li>`;
	}
	list.appendChild(item);
	getRoot.appendChild(list);
}

function add() {
	const getName = document.getElementsByClassName("iname")[0];
	const getAge = document.getElementsByClassName("iscore")[0];
	defineArr.push({ name: getName.value, score: +getAge.value });
	getName.value = "";
	getAge.value = 5;
	load();
}

function getScoreLager(number) {
	const t = defineArr.filter(item => item.score >= number);
	load(t);
}

function sortDesc(a, b) {
	return a.score - b.score;
}

function sortAsc(a, b) {
	return b.score - a.score;
}

function sort() {
	var compare = sortdesc ? sortDesc : sortAsc;
	defineArr.sort(compare);
	sortdesc = !sortdesc;
	load(defineArr);
}
