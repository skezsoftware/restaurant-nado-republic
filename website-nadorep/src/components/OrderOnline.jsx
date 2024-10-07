import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Order-Online.css";
import UberEats from "../assets/uber-eats.svg";
import DoorDash from "../assets/doordash-logo.svg";
import Grubhub from "../assets/grubhub-logo.png";
import Slice from "../assets/slice.svg";

export default function ButtonSizes() {
  return (
    <>
      <div className="order-online-background">
        <header className="online-header">
          <h1>ORDER ONLINE</h1>
          <hr className="line-across-orderpg"></hr>
          <h2>Click on any logo below to order now</h2>
        </header>
        <Box sx={{ "& button": { m: 1 } }} className="butons-box">
          <div className="order-online-buttons">
            <a href="https://www.ubereats.com/store/nado-republic/8Xj265kVRguAkKtHNVilxw?utm_campaign=place-action-link&utm_medium=organic&utm_source=google" id="delivery-link">
              <Button variant="contained" size="large" id="order-button">
                <img src={UberEats} alt="Uber Eats Logo" />
              </Button>
            </a>
            <a href="https://www.doordash.com/store/nado-republic-coronado-574738/?utm_campaign=gpa" id="delivery-link">
              <Button variant="contained" size="large" id="order-button">
                <img src={DoorDash} alt="Door Dash Logo" />
              </Button>
            </a>
            <a href="https://www.grubhub.com/restaurant/nado-republic-1007-c-ave-coronado/2577324?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&delivery=true&rwg_token=AJKvS9UsWeL80HQF_ESAAUpNFIAIj45Omb7A-FMNmUHaiNzRrXPmoSzqhuv_pLI0h6CZepkDAS4bqoO02SX0so6QMyBY4YlE9Q%3D%3D" id="delivery-link">
              <Button variant="contained" size="large" id="order-button">
                <img src={Grubhub} alt="grubhub logo" />
              </Button>
            </a>
            <a href="https://slicelife.com/restaurants/ca/coronado/92118/nado-republic/menu?utm_campaign=google-order-action-link&rwg_token=AJKvS9Uido2KB1c_Hu05amv_wMoRSY1kQ3ppNZijZjRbm6z2yWXUg3lR3HJFLYlo_UXvCLlfLhwLhydFbCElcKyOGWGC8qaZrA%3D%3D" id="delivery-link">
              <Button variant="contained" size="large" id="order-button">
                <img src={Slice} alt="slice logo" id="slice" />
              </Button>
            </a>
          </div>
        </Box>
      </div>
    </>
  );
}
