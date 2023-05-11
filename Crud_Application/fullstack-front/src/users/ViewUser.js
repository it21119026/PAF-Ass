import { render } from "@testing-library/react";
import axios from "axios";
import React, { Component, useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

import 'antd/dist/reset.css';
import { Avatar } from 'antd';
import ProfilePicChanger from "./components/ProfilePicChanger"
import pic1  from "./components/pics/profile.jpg"
import pic2 from "./components/pics/profile1.jpg"
import pic3 from "./components/pics/pic1.png"
import pic4 from "./components/pics/pic2.png"
import pic5 from "./components/pics/pic3.png"
import pic6 from "./components/pics/pic4.jpg"

import "./ViewUser.css";


export default function ViewUser() {

  class App extends Component {

    constructor(props) {
      super(props) ;
      this.state = {
        profileImage :''
      }
    }
  
    handleImagechange = (profileImage) =>{
      this.setState ({
        profileImage
      })
    }

    render (){
      return (
        <div className="App">
          <h3></h3>
          <div className="profile-container">
            <Avatar size={64} icon = "" src={this.state.profileImage} />
            <ProfilePicChanger handleImagechange={this.handleImagechange} 
              pic1={pic1} 
              pic2={pic2}
              pic3={pic3}
              pic4={pic4}
              pic5={pic5}
              pic6={pic6}
            />
          </div>
          
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">User Details</h2>
    
                <div className="card">
                  <div className="card-header">
                    Details of user id : {user.id}
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>Name:</b>
                        {user.name}
                      </li>
                      <li className="list-group-item">
                        <b>UserName:</b>
                        {user.username}
                      </li>
                      <li className="list-group-item">
                        <b>Email:</b>
                        {user.email}
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                <button className="btn btn-danger" onClick={() => onDelete(user.id)}>
                  Delete User
                </button>
            \
                  

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>

                  <Link className="btn btn-primary my-2" to={"/"}>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
  
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  const onDelete = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    alert("User deleted successfully");
    window.location = "/";
  };

  return <App />;
}
