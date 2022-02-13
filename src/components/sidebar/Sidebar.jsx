import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  AttachMoney,
  DynamicFeed,
  ChatBubbleOutline,
  BarChart
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList" >
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">

            <Link to="/order" className="link">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Orders
            </li>
            </Link>
            <Link to="/sub" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Subcribers
            </li>
            </Link>
          </ul> 
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to="/newUser" className="link">
            <li className="sidebarListItem">
              
              <PermIdentity className="sidebarIcon" />
              Add an Admin
            </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <div className="sidebarIcon log">
                <span class="material-icons-sharp">logout</span>
              </div>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
