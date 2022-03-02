import "./orderlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrder } from "../../redux/apiCalls";

export default function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrder(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 80 },
    {
      field: "order",
      headerName: "Customer Info",
      width: 300,
      renderCell: (params) => {
        return (
          <>
          <div className="productListItem">
            {/* <img
              className="productListImg"
              src="https://i.ibb.co/PZL0wSL/clip-art-fast-online-ordering-fried-food-delivery-icon-png-transparent-png-kindpng.png"
              alt=""
            /> */}
            {params.row.name}
          </div>
          <div className="productListItem">
          {params.row.email}
        </div>
        </>
        );
      },
    },
    {
      field: "phone",
      headerName: "phone",
      width: 160,
    },
    {
      field: "amount",
      headerName: "amount",
      width: 160,
    },
    {
      field: "address",
      headerName: "address",
      width: 160,
    },

    {
      field: "status",
      headerName: "status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <button className="productListEdit">Open</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <h2>
        <span>Orders</span>
      </h2>
      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
