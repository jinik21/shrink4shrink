import React from "react";
import { Link } from "react-router-dom";

class FindDoctor extends React.Component {
  handleSignOut() {
    localStorage.removeItem("user");
  }
  doctor_info = [
    {
      Name: "John Doe",
      Text: "Example Text",
      img: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
    },
    {
      Name: "John Doe",
      Text: "Example Text",
      img: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
    },
    {
      Name: "John Doe",
      Text: "Example Text",
      img: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
    },
    {
      Name: "John Doe",
      Text: "Example Text",
      img: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      data: this.doctor_info,
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              s4s
            </a>
            <form className="d-flex">
              <Link to="/" className="button btn btn-outline-success me-2" onClick={this.handleSignOut}>
                {" "}
                Logout
              </Link>
            </form>
          </div>
        </nav>
        <div className="container-fluid" id="main">
          <div className="row row-offcanvas row-offcanvas-left">
            <div
              className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
              id="sidebar"
              role="navigation"
              style={{ backgroundColor: "#171010" }}
            >
              <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                <li className="nav-item">
                  <a className="nav-link text-light" href="/dashboard">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/upcoming-sessions">
                    Upcoming Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/previous-sessions">
                    Previous Sessions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/routines">
                    Routines
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/prescriptions">
                    Prescriptions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/newsession">
                    New Session
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/find-doctor">
                    Find Doctor
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col main pt-5 mt=3 border border-dark"
              style={{ backgroundColor: "#FAF3F3" }}
            >
              <h1 className="text-dark">Find Doctor</h1>
              <div className="row">
                {this.state.data.map((ele) => (
                  <div className="col-md-4 mt-4">
                    <div className="card profile-card-5">
                      <div className="card-img-block">
                        <img className="card-img-top" src={ele.img} alt="img" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{ele.Name}</h4>
                        <p className="card-text">{ele.Text}.</p>
                        <a href="/dashboard" className="btn btn-primary">
                          See Profile
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FindDoctor;
