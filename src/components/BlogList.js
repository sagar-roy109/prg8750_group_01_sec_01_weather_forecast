import BlogGrid from './BlogsGrid';

function BlogList() {
  return (
    <div className='container blog-container'>
			<BlogGrid></BlogGrid>
			<BlogGrid></BlogGrid>
			<BlogGrid></BlogGrid>
			<BlogGrid></BlogGrid>
		</div>
  );
}

export default BlogList;
