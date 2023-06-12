import "./datatable2.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns2, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";

const Datatable2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {


        const querySnapshot = await getDocs(collection(db, "people"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() })

        });
        setData(list)
      } catch (err) {
        console.log(err)
      }
    };
    fetchData()
  }, []);

  console.log(data)

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "people", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err)
    }

  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">

            <div className="viewButton">Edit</div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable2">
      <div className="datatableTitle">
        Add New People
        <Link to="/people/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns2.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default Datatable2;
