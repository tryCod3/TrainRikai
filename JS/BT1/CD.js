function CD(MaCD, TuaCD, CaSy, SoBaiHat, GiaThanh) {
	if (!new.target) throw "CD() must be call with new";
	if (!MaCD || (MaCD && typeof MaCD !== "number"))
		throw "MaCD must be number > 0";
	if (!TuaCD || (TuaCD && typeof TuaCD !== "string"))
		throw "TuaCD must be string";
	if (!CaSy || (CaSy && typeof CaSy !== "string"))
		throw "CaSy must be string";
	if (!SoBaiHat || (SoBaiHat && typeof SoBaiHat !== "number"))
		throw "SoBaiHat must be number > 0";
	if (!GiaThanh || (GiaThanh && typeof GiaThanh !== "number"))
		throw "GiaThanh must be number > 0";
	this.MaCD = MaCD;
	this.TuaCD = TuaCD;
	this.CaSy = CaSy;
	this.SoBaiHat = SoBaiHat;
	this.GiaThanh = GiaThanh;
}

CD.prototype.toString = function () {
	return (
		this.MaCD +
		" - " +
		this.TuaCD +
		" - " +
		this.CaSy +
		" - " +
		this.SoBaiHat +
		" - " +
		this.GiaThanh
	);
};

CD.prototype.getParamesters = function () {
	return Object.keys(this);
};

function CDList() {
	return {
		arr: [],
	};
}

function CDManager(cdList) {
	if (!new.target) throw "CDManager() must be call with new";
	this.cdList = cdList;
}

CDManager.prototype.getInstance = function () {
	if (!this.cdList) this.cdList = new CDList();
	return this.cdList;
};
CDManager.prototype.typeSort = function (key) {
	if (!this) throw "null model call";
	return {
		ASC: function (a, b) {
			if (a[key] >= b[key]) {
				return 1;
			}
			return -1;
		},
		DESC: function (a, b) {
			if (a[key] <= b[key]) {
				return 1;
			}
			return -1;
		},
	};
};
CDManager.prototype.addCDRanger = function (arr) {
	if (!Array.isArray(arr)) throw "addCDRanger paramester must be arr!";
	if (arr.length == 0) throw "arr.length must be > 0";
	arr.forEach(e => {
		if (!(e instanceof CD)) throw `${e} not be instance CD`;
	});
	arr.forEach(e => {
		this.addCD(e);
	});
};
CDManager.prototype.addCD = function (model) {
	if (model == null) throw "model error!";
	if (!(model instanceof CD)) throw `${model} must instance CD!`;
	const modelSameMaCD = this.getInstance().arr.filter(e => {
		return e.MaCD === model.MaCD;
	});

	if (modelSameMaCD.length > 0)
		throw `MaCD: ${model.MaCD} of model is exits!`;
	else {
		this.getInstance().arr.push(model);
		console.log(`add { ${model.toString()} } is succes!`);
	}
};
CDManager.prototype.show = function () {
	console.log(this.getInstance().arr);
};
CDManager.prototype.count = function () {
	return this.getInstance().arr.length;
};
CDManager.prototype.getSumGiaThanh = function () {
	const sum = this.getInstance().arr.reduce(
		(sumPrevious, modelCurent) => sumPrevious + modelCurent.GiaThanh,
		0
	);
	return sum;
};
CDManager.prototype.sort = function (callBackTypeSort) {
	if (typeof callBackTypeSort !== "function")
		throw "callBackTypeSort must is function";
	try {
		this.getInstance().arr.sort(callBackTypeSort);
	} catch (err) {
		console.log("IN METHOD SORT OF CDManager " + err);
	}
};

var cd1 = new CD(1, "ABC", "quách vũ 1", 2, 123);
var cd2 = new CD(2, "AbC", "quách vũ 2", 5, 123.2);
var cd3 = new CD(3, "Jack", "quách vũ 3", 6, 1.223);
var cd4 = new CD(4, "Jabj", "quách vũ 4", 2, 123.4);
var cd5 = new CD(5, "abc", "quách vũ 5", 2, 1003.4);
var cdManager = new CDManager();
// cdManager.addCD(cd1);
// cdManager.addCD(cd2);
// cdManager.addCD(cd3);
// cdManager.addCD(cd4);
cdManager.addCDRanger([cd1, cd2, cd3, cd4, cd5]);
cdManager.show();
console.log(cdManager.count());
console.log(cdManager.getSumGiaThanh());
cdManager.sort(cdManager.typeSort("GiaThanh").ASC);
cdManager.show();
cdManager.sort(cdManager.typeSort("TuaCD").ASC);
cdManager.show();
