import React,{ Component } from 'react';
import 'antd/dist/reset.css';
import { Avatar } from 'antd';
import ProfilePicChanger from "./components/ProfilePicChanger"
import pic1  from "./components/pics/profile.jpg"
import pic2 from "./components/pics/profile1.jpg"
import pic3 from "./components/pics/pic1.png"
import pic4 from "./components/pics/pic2.png"
import pic5 from "./components/pics/pic3.png"
import pic6 from "./components/pics/pic4.jpg"

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
        <h3>Hello</h3>
        <Avatar size={64} icon = "" src= {this.state.profileImage} />
        <ProfilePicChanger handleImagechange={this.handleImagechange} 
        pic1={pic1} 
        pic2={pic2}
        pic3={pic3}
        pic4={pic4}
        pic5={pic5}
        pic6={pic6}
        />
      </div>
    );
  }

  

}

export default  App;