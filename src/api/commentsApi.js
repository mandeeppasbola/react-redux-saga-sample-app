let comments = [
	{
		id: 1,
		title: "This is title",
		desc: "This is description"
	},
	{
		id: 2,
		title: "This is title 2",
		desc: "This is description 2"
	},
	{
		id: 3,
		title: "This is title 3",
		desc: "This is description 3"
	}
];

class CommentsApi {
	static getAllComments() {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve(comments);
			}, 0)
		});
	}
	
	static deleteComment(id) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve(id);
			}, 0)
		});
	}
	
	static saveComment(comment) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve(comment);
			}, 0)
		});
	}
	
	static addComment(comment) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				comment.id = Math.random();
				resolve(comment);
			}, 0)
		});
	}	
}

export default CommentsApi;