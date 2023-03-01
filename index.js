function doneswstuff() {
	location.replace("/portal");
}
function load() {
	if('serviceWorker' in navigator) {
		let registration;
			navigator.serviceWorker.register("sw.js").then(function(finalworker) {
				console.log("registerd")
				setTimeout(doneswstuff, 1500)
			})
	} else {
		doneswstuff()
	}
}
