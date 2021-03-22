//file to get single chirp
import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { validateLocaleAndSetLanguage } from "typescript";
import { Link } from "react-router-dom";

export const Admin: React.FC<AdminProps> = (props: AdminProps) => {
  const [chirp, setChirp] = useState<chirp[]>([]);
  const [content, setcontent] = useState<string>("");

  const getChirps = async () => {
    try {
      let res = await fetch(`api/chirps/${props.match.params.id}`);
      let data = await res.json();
      setChirp(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getChirps();
  }, []);

  const deleteChirp = async () => {
    try {
      await fetch(`api/chirps/${props.match.params.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    props.history.push("/");
  };

  const submitcontent = async () => {
    try {
      await fetch(`/api/chirps/${props.match.params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content, id: props.match.params.id }),
      });
    } catch (error) {
      console.log(error);
    }
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <div className="container ">
        <Link to={`/`}>
          <button className="btn text-success">Home Page</button>
        </Link>
        <div className="row  d-flex justify-content-center ">
          {chirp.map((val) => (
            <div className="card col-5 m-4" key={`adminuuid-${val.id}`}>
              <div className="card-header">UserId: {val.userid}</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p> {val.content}</p>
                  <footer className="blockquote-footer">
                    Location <cite title="Source Title">{val.location}</cite>
                  </footer>
                </blockquote>
                <button className="btn text-danger" onClick={deleteChirp}>
                  Click To Remove Chirp
                </button>
                <Link to={`/add/${val.userid}`}>
                  <button className="btn text-success">Add New Chirp</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <form action="" className="form-group p-3">
          <label htmlFor="content">content:</label>
          <textarea
            value={content}
            onChange={(e) => {
              setcontent(e.target.value);
            }}
            name=""
            id=""
            cols={30}
            rows={10}
            className="form-control"
          ></textarea>
          <button onClick={submitcontent} className="btn text-success mt-2">
            Click To Update Message
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

interface AdminProps extends RouteComponentProps<{ id: string }> {}

interface chirp {
  id: number;
  userid: number;
  content: string;
  location: string;
  _create: string;
}

export default Admin;
