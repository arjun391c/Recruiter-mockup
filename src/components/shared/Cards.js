import React from "react";

export default function Cards(props) {
  const { item } = props;
/* interaction with card for different job status */
  const RenderButton = () => {
    if (item.status === "") {
      return (
        <div className="col-12 card-button">
          <button
            className="col-6 "
            onClick={() => props.acceptjob(props.index)}
          >
            Accept
          </button>
          <button
            className="col-6"
            onClick={() => props.rejectjob(props.index)}
          >
            Reject
          </button>
        </div>
      );
    } else if (item.status === "rejected") {
      return (
        <div className="card-rejected">
          <p>Rejected</p>
        </div>
      );
    } else {
      return (
        <div className=" col-12 accepted">
          <button
            className="col-6"
            onClick={() => props.openModal(props.index)}
          >
            Add Candidate
          </button>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="card-body">
        <h2><i className="fa fa-image "/></h2>
        <h4>{item.title}</h4>
        <p>
          {item.company}, {item.department}
        </p>
        <p>{item.location}</p>

        <hr />

        <div className="row">
          <div className="col-6">
            <p><i className="fa fa-address-card mr-2"/>{item.contact}</p>
          </div>
          <div className="col-6">
            <p><i className="fa fa-briefcase mr-2"/>{item.experience}</p>
          </div>
          <div className="col-6"><i className="fa fa-calendar-o mr-2"/>{item.jobtype}</div>
        </div>

        <hr />

        <div className="row">
          <div className="col-6">
            <p><i className="fa fa-user mr-2"/>{item.candidates.length} Candidates</p>
          </div>
          <div className="col-6">
            <p><i className="fa fa-money-bill-alt"/>{item.income}</p>
          </div>
        </div>
        <div className="row">
          <RenderButton
            acceptjob={props.acceptjob}
            rejectjob={props.rejectjob}
            openModal={props.openModal}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
