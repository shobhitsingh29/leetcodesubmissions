
var areOccurrencesEqual = function (s) {
		if (s.length == 1) return true;

		const obj = {};
		for (const i of s) {
			obj[i] ? obj[i] += 1 : obj[i] = 1;
		}
		const temp = [...new Set(Object.values(obj))];
		if (temp.length == 1) return true;
        if (temp.length > 1) return false;

		return true;
	};
