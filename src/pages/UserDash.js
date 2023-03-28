import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';
import Header from '../components/Header'


function UserDash() {
  const history = useNavigate();
  const [userData, setUserData] = useState({});
  const [city, setCity] = useState("");
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };

  const addCity = (e) => {
    e.preventDefault();

    fetch("http://localhost:5001/add-city", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        city,
        email: userData.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
      });
  };
  useEffect(() => {
    fetch("http://localhost:5001/user-details", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
      });
  }, []);

  return (
    <>
		<Header></Header>
      <div className="container user-dashboard">
				<div className="row">
				<h1 className="text-center">Welcome to Dashboard</h1>
        <h5>User Details</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.fname}</td>
              <td>{userData.lname}</td>
              <td>{userData.email}</td>
              <td>
                <button onClick={logout} className="btn btn-primary">
                  Log Out
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
        <h5>Add your favourite city</h5>

        <Form onSubmit={addCity}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add your favourite city"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
				</div>
      </div>
    </>
  );
}

export default UserDash;

