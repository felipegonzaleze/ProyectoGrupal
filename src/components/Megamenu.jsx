import { Menu } from "antd";
import './Megamenu.css';
import { items } from "../constants/constants.js";

export const Megamenu = () => {
  return (
    <>
      <Menu
      className="menu"
        mode="horizontal"
        items={items}
      ></Menu>
    </>
  );
};
