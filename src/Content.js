import * as content from './content';

class Content {

	constructor() {}

	static get(type, uri) {
		let fields;
		let nodes = content[type];
		JSON.stringify(nodes.map(node => {
			if (node.hasOwnProperty(uri)) {
				fields = node[uri];
			}
		}));
		return fields ? fields : '';
	}
}

export default Content;