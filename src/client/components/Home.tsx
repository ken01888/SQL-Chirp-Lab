//file to get all chirps

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home: React.FC<HomeProps> = (props) => {
  const [chirps, setChirps] = useState<chirp[]>([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await fetch("/api/chirps/");
        let data = await res.json();
        setChirps(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          {chirps.map((val) => (
            <div className="card col-3 m-4 " key={`allChirps-${val.id}`}>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p> {val.content}</p>
                  <footer className="blockquote-footer">
                    Location <cite title="Source Title">{val.location}</cite>
                  </footer>
                  <Link to={`/${val.id}`}>
                    <button className="btn btn-secondary btn-sm">
                      Admin Option
                    </button>
                  </Link>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

interface HomeProps {}

interface chirp {
  id: number;
  userid: number;
  content: string;
  location: string;
  _create: string;
}

export default Home;
