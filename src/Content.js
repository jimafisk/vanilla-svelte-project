import blog from './content/blog.js';

class Content {

	constructor() {}

	static get(type, uri) {
		let content;
		JSON.stringify(blog.map(node => {
			if (node.hasOwnProperty(uri)) {
				content = node[uri];
			}
		}));
		if (content) {
			return content;
		} else {
			return '';
		}
	}
}

export default Content;