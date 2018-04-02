if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
		}).catch(function(err) {
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}