import { useLocation } from "react-router-dom";
import "../product/product.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";

export default function Order() {
  const location = useLocation();
  const orderId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const order = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderId)
  );

  return (
    <div className="orderw">
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Order</h1>
        </div>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={order.img} alt="" className="productInfoImg" />
              <span className="productName">{order.name}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{order._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Email:</span>
                <span className="productInfoValue">{order.email}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Phone:</span>
                <span className="productInfoValue">{order.phone}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">amount:</span>
                <span className="productInfoValue">{order.amount}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Address:</span>
                <span className="productInfoValue">{order.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="userShowBottom">
        <span className="userShowTitle">order Details</span>
       
        {order.products.map((product , index) =>(
        <div className="userShowInfo">
          
          <span className="userShowInfoTitle"> Product Id: {product._id}</span>
          <span className="userShowInfoTitle">Quantity: {product.quantity}</span>
          <span className="userShowInfoTitle">Size : {product.size}</span>
          <span className="userShowInfoTitle">color: {product.color}</span>
         
        </div> 
        
        ))}
      </div>
    </div>
  );
}
