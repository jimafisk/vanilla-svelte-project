import App from './App.svelte';

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/jim-service-worker.js')
	.then((reg) => {
		console.log('Service Worker registration succeeded.');
	}).catch((error) => {
		console.log('Service Worker registration failed with ' + error);
	});
} else {
	console.log('Service Workers not supported by browser')
}

const replaceContainer = function ( Component, options ) {
	const frag = document.createDocumentFragment();
	const component = new Component( Object.assign( {}, options, { target: frag } ));
	if (options.target) {
		options.target.replaceWith( frag );
	}
	return component;
}

// const app = new App({
  const app = replaceContainer( App, {
	//target: document.html,
	target: document.querySelector( '#target' ),
	props: {
		name: 'world'
	}
});

export default app;