import "./sublist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getSubscriber} from "../../redux/apiCalls";

export default function SubList() {
  const dispatch = useDispatch();
  const subscribers = useSelector((state) => state.sub.subscribers);

  useEffect(() => {
    getSubscriber(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "subscribers",
      headerName: "Subscribers",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.email}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/sub/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
           
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <h2>
        <span>SubScribers</span>
      </h2>
      <DataGrid
        rows={subscribers}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
