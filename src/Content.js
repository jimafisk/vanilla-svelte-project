import blog from './content/blog.js';

class Content {

	constructor() {}

	static get(type, uri) {
		const contents = JSON.stringify(blog.map(node => {
			if (node.hasOwnProperty(uri)) {
				return node[uri];
			} else {
				return;
			}
		}));
		return contents;
	}
}

export default Content;