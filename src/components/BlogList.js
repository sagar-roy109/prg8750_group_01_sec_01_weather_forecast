import BlogGrid from './BlogsGrid';

function BlogList() {
  return (
    <div className='container blog-container'>
			<div className="row">
			<div className="col-md-4"><BlogGrid></BlogGrid></div>
			<div className="col-md-4"><BlogGrid></BlogGrid></div>
			<div className="col-md-4"><BlogGrid></BlogGrid></div>
			<div className="col-md-4"><BlogGrid></BlogGrid></div>
			<div className="col-md-4"><BlogGrid></BlogGrid></div>
			<div className="col-md-4"><BlogGrid></BlogGrid></div>
			</div>


		</div>
  );
}

export default BlogList;
