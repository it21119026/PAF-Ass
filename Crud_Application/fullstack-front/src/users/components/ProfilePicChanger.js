import React, { Component } from "react";
import "antd/dist/reset.css";
import { Modal, Button, message } from "antd";

class ProfilePicChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      profileImage: localStorage.getItem(`profile_${props.userId}`) || "",
      imageArray: [
        props.pic1,
        props.pic2,
        props.pic3,
        props.pic4,
        props.pic5,
        props.pic6,
      ],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState(
      {
        visible: false,
      },
      () => {
        localStorage.setItem(
          `profile_${this.props.userId}`,
          this.state.profileImage
        );
        message.success("Profile image updated successfully.");
      }
    );
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleImageChange = (profileImage) => {
    this.setState({
      profileImage,
    });
  };

  render() {
    const imageMapper = this.state.imageArray.map((image, index) => {
      return (
        <img
          key={index}
          src={image}
          onClick={() => this.handleImageChange(image)}
          height="48px"
        />
      );
    });

    return (
      <div className="ProfilePicChanger">
        <Button type="primary" onClick={this.showModal}>
          Change Profile Pic
        </Button>
        <Modal
          title="Profile Pic Changer"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {imageMapper}
        </Modal>{" "}
        <img
          src={this.state.profileImage}
          alt="Profile"
          height="64px"
          style={{ display: "block", margin: "0 auto" }}
        />
      </div>
    );
  }
}

export default ProfilePicChanger;
