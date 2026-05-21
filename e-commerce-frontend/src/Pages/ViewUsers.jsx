import React from "react";
import axios from "axios";
const ViewUsers = () => {
  const [users, setUsers] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [searchFoundUsers, setFoundUsers] = React.useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/get-users");
      setUsers(response.data.allUsers);
      setFoundUsers(response.data.allUsers);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
    setFoundUsers(users);
    const foundUsers = users.filter((user) => user.name.includes(input));
    setFoundUsers(foundUsers);
    console.log(foundUsers);
  };
  return (
    <div className="m-5 p-5">
      <h1 className="text-center">Users</h1>
      <div
        className="input-container row"
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <input
          style={{
            width: "500px",
          }}
          onChange={handleChange}
          type="text"
          placeholder="Enter User Name Search"
        />
      </div>
      <table className="table">
        <thead>
          <th className="border border-danger text-center bg-success">Name</th>
          <th className="border border-danger text-center bg-success">Email</th>
          <th className="border border-danger text-center bg-success">Phone</th>
          <th className="border border-danger text-center bg-success">
            Address
          </th>
          <th className="border border-danger text-center bg-success">City</th>
          <th className="border border-danger text-center bg-success">State</th>
          <th className="border border-danger text-center bg-success">
            Actions
          </th>
        </thead>
        <tbody>
          {searchFoundUsers.map((user) => {
            return (
              <tr>
                <td className="border border-danger">{user.name}</td>
                <td className="border border-danger">{user.email}</td>
                <td className="border border-danger">{user.phone}</td>
                <td className="border border-danger">{user.address}</td>
                <td className="border border-danger">{user.city}</td>
                <td className="border border-danger">{user.state}</td>
                <td className="border border-danger">
                  <button className="btn btn-warning mx-2">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;