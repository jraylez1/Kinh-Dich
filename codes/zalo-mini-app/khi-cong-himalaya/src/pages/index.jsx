import React from "react";
import { List, Page, Icon, useNavigate, Button } from "zmp-ui";
import { getUserInfo, getPhoneNumber } from 'zmp-sdk/apis';
import { useRecoilValue } from "recoil";
import { userState } from "../state";

import UserCard from "../components/user-card";

const HomePage = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const handleGetUserInfo = () => {
    getUserInfo({
      success: data => {
        console.log("UserInfo", data);
      },
      fail: error => {
        console.log(error);
      }
    })
  }

  const handleGetPhone = () => {
    getPhoneNumber({
      success: data => {
        console.log("UserInfo", data);
      },
      fail: error => {
        console.log(error);
      }
    })
  }

  return (
    <Page className="page">
      <div className="section-container">
        <UserCard user={user} />
      </div>
      <div className="section-container">
        <List>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/about")}>About</div>
          </List.Item>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/user")}>User</div>
          </List.Item>
        </List>
        <Button onClick={handleGetUserInfo}>Get user info</Button>
        <Button onClick={handleGetPhone}>Get phone</Button>
      </div>
    </Page>
  );
};

export default HomePage;
