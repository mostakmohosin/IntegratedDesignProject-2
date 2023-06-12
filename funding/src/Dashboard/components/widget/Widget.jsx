import "./widget.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const Widget = ({ type }) => {
  let data;

  const [amount, setAmount] = useState(null)

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        query: "users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "donor":
      data = {
        title: "DONORS",
        link: "View all donors",
        query: "donor",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "people":
      data = {
        title: "PEOPLES",
        query: "people",
        link: "View all peoples",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        query: "people",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
        
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = async() =>{
    const today =new Date();
    const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(today.getMonth() - 1));

    const lastMonthQuery = query(
      collection(db, data.query),
      where("timeStamp", "<=", today),
      where("timeStamp", ">", lastMonth)
  );
  const prevMonthQuery = query(
    collection(db, data.query),
    where("timeStamp", "<=", lastMonth),
    where("timeStamp", ">", prevMonth)
);
const lastMonthData = await getDocs(lastMonthQuery)
const prevMonthData = await getDocs(prevMonthQuery)

setAmount(lastMonthData.docs.length)
  };
  fetchData();
}, []);
  
  


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          
          
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
