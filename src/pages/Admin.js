import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Admin() {
  const [allPosts, setAllPosts] = React.useState([]);

  const addSinglePost = (post) => {
    const posts = allPosts.slice();
    posts.push(post);
    setAllPosts(posts);
  };
  React.useEffect(() => {
    const query = `query GetAllPosts {
            getAllPosts {
              id
              img
              DOP
              title
              posttype
             
            }
          }`;
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((res) => setAllPosts(res.data.getAllPosts));
  }, []);
  return (
    <>
      <Header></Header>

      <Sidebar allPosts={allPosts} />
    </>
  );
}
export default Admin;
