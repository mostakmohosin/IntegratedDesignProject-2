export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 230,
  },
  
];

export const userColumns1 = [
  { field: "id", headerName: "ID", width: 70 },
 
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 120,
  },

  {
    field: "card",
    headerName: "Card",
    width: 150,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
  },
  
];

