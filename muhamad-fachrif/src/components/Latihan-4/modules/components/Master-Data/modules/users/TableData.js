import React from "react";
import { useNavigate } from "react-router-dom";

export default function TableData({ data }) {
  const navigate = useNavigate();

  const Users = ({ user }) => {
    const handleDetail = () => {
      navigate('/userdetails/');
    };

    return (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.firstname} {user.middlename} {user.lastname}</td>
        <td>{user.npm}</td>
        <td>{user.programStudy.name}</td>
        <td>
          <button onClick={handleDetail} className="btn btn-sm btn-info">
            Detail
          </button>
        </td>
      </tr>
    );

  };

  return (
    <div className="list-product">
      <div className="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">NPM</th>
              <th scope="col">Jurusan</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              (Object.values(data).length > 0) ? (
                data.map((e, index) => (
                  // <div className="col-3" key={index}>
                  <Users user={e} />
                  // </div>
                ))
              ) : (
                <div className="col-12">
                  <p className="text-dark">No record Found</p>
                </div>
              )
            }
          </tbody >
        </table >
      </div>
    </div>
  );
}
