import blog from './content/blog.js';

class Content {
	constructor(type) {
		this.type = type;
	}
	static get() {
		const contents = JSON.stringify(blog.map(post => {
			return post;
		}));
		return contents;
	}
}

export default Content;