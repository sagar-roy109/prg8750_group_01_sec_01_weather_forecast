import React, { useState } from 'react';
const URL = process.env.REACT_APP_WEBSITE_URL;

function PostTable(props) {
  const [data, setData] = useState(props.data);

  async function handleDelete(id) {
    //e.preventDefault();

    fetch(`${URL}/post-delete`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
      });
  }

  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.id}>
          <td>{row.title}</td>
          <td>{row.img}</td>
          <td>{row.posttype}</td>
          <td>{row.dop}</td>
          <td>
            <button onClick={() => handleDelete(row.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
export default PostTable;
