import nodes from './nodes.js';

class Content {

	constructor() {}

	static get(uri) {
		let content;
		JSON.stringify(nodes.map(node => {
			if (node.hasOwnProperty(uri)) {
				content = node[uri];
			}
		}));
		return content ? content : '';
	}
}

export default Content;