import React from 'react';

import AddCommentContainer from '../container/add-comment';
import CommentListContainer from '../container/comment-list';

const CommentManager = () => (
	<div className="container">
		<AddCommentContainer/>
		<CommentListContainer/>
	</div>
)

export default CommentManager;
