import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { useParams } from "react-router-dom";
import chirps from "../../server/db/chirps";

export const Add: React.FC<AddProps> = (props: AddProps) => {
  let userid = useParams();

  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  let newitem = Object.values(userid);

  const handleClickUsers = async () => {
    await fetch(`/api/chirps/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: newitem,
        content: message,
        location: location,
      }),
    });
    props.history.push("/");
  };

  return (
      <React.Fragment>

    <div className="container ">
      <div className="row justify-content-center">
        <form className="form-group col-8 m-4 ">
          <label htmlFor="name">Create new message:</label>
          <input
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            type="text"
            className="form-control"
            required
          />
          <label htmlFor="email">Enter location:</label>
          <input
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            className="form-control"
            required
          />
          <button className="btn text-success" onClick={handleClickUsers}>
            Create New Chirp
          </button>
        </form>
      </div>
    </div>
    </React.Fragment>
  );
};

interface AddProps extends RouteComponentProps<{ userid: string }> {}


export default Add;
