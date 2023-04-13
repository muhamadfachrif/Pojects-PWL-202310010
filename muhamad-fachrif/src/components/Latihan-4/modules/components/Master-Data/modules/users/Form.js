import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
// import PackageJSON from "../../../../../../../../package.json";

export function Form(props) {
  const [postData, setPostData] = useState({
    npm: "",
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    birthdate: "",
    programs: { id: 0 },
    programStudy: { id: 0 },
  });

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: "http://localhost:8080/api/students",
      headers: { "Content-Type": "application/json" },
      data: postData,
    };
    axios
      .request(config)
      .then((response) => {
        let results = response.data.data;
        if (results) {
          openModal({ header: "Info", message: "Successfully submited" });
          props.getProduct();
        } else {
          openModal({ header: "Error", message: "Failed submit" });
        }
      })
      .catch((response) => {
        openModal({ header: "Error", message: response.error });
      });
  };

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Form User</h3>
          <p className="text-muted fs-7">
            Please fill up the form with correctly
          </p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form
          method="post"
          autoComplete="off"
          id="form-product"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="mb-3">
            <label className="form-label">NPM</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.npm}
              onChange={(e) =>
                setPostData({ ...postData, npm: e.target.value })
              }
            />
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  defaultValue={postData.firstname}
                  onChange={(e) =>
                    setPostData({ ...postData, firstname: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="mb-3">
                <label className="form-label">Middle Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  defaultValue={postData.middlename}
                  onChange={(e) =>
                    setPostData({ ...postData, middlename: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  defaultValue={postData.lastname}
                  onChange={(e) =>
                    setPostData({ ...postData, lastname: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.email}
              onChange={(e) =>
                setPostData({ ...postData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Birthdate</label>
            {/* <DatePicker
              className='form-control'
              selected={new Date()}
              type="text"
              name="name"
              dateFormat="yyyy-MM-dd"
              defaultValue={postData.birthdate}
              onChange={(e) =>
                setPostData({ ...postData, birthdate: e.target.value })
              }
            /> */}
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={postData.birthdate}
              onChange={(e) =>
                setPostData({ ...postData, birthdate: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Programs</label>
            <input
              type="number"
              name="name"
              className="form-control"
              defaultValue={postData.programs.id}
              onChange={(e) =>
                setPostData({ ...postData, programs: { id: parseInt(e.target.value) } })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Program Study</label>
            <input
              type="number"
              name="name"
              className="form-control"
              defaultValue={postData.programStudy.id}
              onChange={(e) =>
                setPostData({ ...postData, programStudy: { id: parseInt(e.target.value) } })
              }
            />
          </div>

          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div >
    </div >
  );
}
