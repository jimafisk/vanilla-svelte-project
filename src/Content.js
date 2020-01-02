import nodes from './nodes.js';

class Content {

	constructor() {}

	static getNode(uri) {
		let content;
		JSON.stringify(nodes.map(node => {
			if (node.hasOwnProperty(uri)) {
				content = node[uri];
			}
		}));
		return content ? content : '';
	}

	static getAllNodes() {
		let content = nodes.map(node => {
			return node;
		});
		return content;
	}
}

export default Content;