
$(document).ready(function($) {
	function getRandomNumber(e, t, n) {
		return parseFloat((Math.random() * (t - e) + e).toFixed(n))
	}
	
	function getInitialNumber(e, t, n) {
		let a = Date.now();
		return Math.abs(a - e) * n + t
	}
	const claimedCounter = document.querySelector(".js-win-counter");
	if (null !== claimedCounter) {
		const e = new Date("2021-03-01").getTime(),
			t = .04,
			n = 2.08,
			a = 4e3;
		let o = getInitialNumber(e, 353e5, (n - t) / 2 / a);
		o = parseFloat(o.toFixed(2)) + .001;
		const r = {
				el: claimedCounter,
				value: o,
				format: "(,ddd).ddd",
				duration: 1e3,
				theme: claimedCounter.dataset.theme || "default"
			},
			d = new Odometer(r);
		setInterval((function() {
			rand = getRandomNumber(t, n, 2), o = parseFloat((o + rand).toFixed(2)) + .001, d.update(o)
		}), a)
	}
});