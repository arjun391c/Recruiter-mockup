import React from "react";
import { Link } from "react-router-dom";

const SidebarLeft = () => {

  return (
    <React.Fragment>
        <input type="checkbox" id="nav-check" />
        <label htmlFor="nav-check">
          <i className="fa fa-bars" id="nav-btn" />
        </label>
        <div className="sidebar-left">
          <ul>
          <p>Navigation</p>
            <li><Link to="#"><i className="fa fa-image mr-2"/>Dashboard</Link></li>
            <li><Link to="#"><i className="fa fa-image mr-2"/>Candidates</Link></li>
            <hr />
            <p>Jobs</p>
            <li><Link to="/jobs/"><i className="fa fa-image mr-2"/>Live Jobs</Link></li>
            <li><Link to="/jobs/accepted"><i className="fa fa-image mr-2"/>Accepted Jobs</Link></li>
            <li><Link to="/jobs/rejected"><i className="fa fa-image mr-2"/>Rejected Jobs</Link></li>
            <hr/>
            <p>Report</p>
            <li><Link to="/about"><i className="fa fa-image mr-2"/>Help Desk</Link></li>
            <li><Link to="#"><i className="fa fa-image mr-2"/>Tutorial</Link></li>
            <li><Link to="#"><i className="fa fa-image mr-2"/>Feedback</Link></li>
          </ul>
        </div>
    </React.Fragment>
  );
};

export default SidebarLeft;
