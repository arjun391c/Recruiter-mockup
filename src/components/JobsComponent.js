import React, { Component } from "react";
import Cards from "./shared/Cards";
import { Modal, ModalHeader, ModalBody, Input } from "reactstrap";
import { connect } from "react-redux";
import { addAccepted, addRejected, addCandidate } from "../redux/Actions";

class JobsComponent extends Component {
  state = {
    jobs: this.props.jobs,
    candidates: this.props.candidates,
    ismodalOpen: false,
    selectedCandidate: null,
    index: null,
  };
 /* accepting  */
  acceptjob = (index) => {
    console.log("accept pressed");
    this.props.addAccepted(index);
  };
/* rejecting */
  rejectjob = (index) => {
    console.log("reject pressed");
    this.props.addRejected(index);
  };

  /* adding more candidate*/
  onSelect = (event) => {
    console.log(event.target.value);
    this.setState({
      selectedCandidate: event.target.value,
    });
  };
  openModal = (index) => {
    this.setState({
      ismodalOpen: !this.state.ismodalOpen,
      index: index,
    });
  };

  toggle = () => {
    this.setState({
      ismodalOpen: !this.state.ismodalOpen,
    });
  };

  render() {
    const path = this.props.location.pathname.split("/jobs/")[1];
    const RenderItems = () =>
      this.state.jobs.map((item, key) => {
        if (path === item.status)
          return (
            <Cards
              key={key}
              item={item}
              path={path}
              acceptjob={() => this.acceptjob(key)}
              rejectjob={() => this.rejectjob(key)}
              openModal={() => this.openModal(key)}
            />
          );
        return null;
      });

    return (
      <div className="main-container container">
        <div className="card-container">
          <RenderItems />
        </div>

        {/* modal for adding candidate */}
        <div className="modal-container">
          <Modal
            isOpen={this.state.ismodalOpen}
            centered
            toggle={this.toggle}
            unmountOnClose={true}
          >
            <ModalHeader>
              Job Title
              <div className="modal-close">
                <i className="fa fa-close " onClick={() => this.toggle()} />
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="row col-12">
                <div className="modal-list col-6">
                  <Input
                    type="select"
                    name="addcandidate"
                    id="addcandidate"
                    onChange={this.onSelect}
                  >
                    <option value="">Select candidate</option>
                    {this.state.candidates.map((candidate, index) => (
                      <option key={index} value={candidate.name}>
                        {candidate.name}
                      </option>
                    ))}
                  </Input>
                </div>
                <button
                  className="modal-button col-4"
                  onClick={() => {
                    this.props.addCandidate(
                      this.state.index,
                      this.state.selectedCandidate
                    );
                    this.toggle();
                  }}
                >
                  Add
                </button>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.joblist.jobs,
    candidates: state.joblist.candidates,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addAccepted: (index) => dispatch(addAccepted(index)),
  addRejected: (index) => dispatch(addRejected(index)),
  addCandidate: (index, newCandidate) =>
    dispatch(addCandidate(index, newCandidate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JobsComponent);
