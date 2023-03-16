import React from 'react'
import SinglePost from './SinglePost'
import PostsWidget from './PostsWidget'

function SinglePageContainer() {
	return (
		<>
			<div className="container single-post">
				<div className="row">
					<div className="col-md-10">
						<SinglePost></SinglePost>
					</div>
					<div className="col-md-2">
						<h4 className='text-center'>Recent posts</h4>
						<PostsWidget></PostsWidget>
					</div>
				</div>
			</div>
		</>
	)
}

export default SinglePageContainer
