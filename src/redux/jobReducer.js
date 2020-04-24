import { ACCEPT_JOB, REJECT_JOB, ADD_CANDIDATE } from "./ActionTypes";

const initialState = {
  jobs: [
    {
      id: "0",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "accepted",
    },
    {
      id: "1",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "rejected",
    },
    {
      id: "2",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "rejected",
    },
    {
      id: "3",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "rejected",
    },
    {
      id: "4",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
    {
      id: "5",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "accepted",
    },
    {
      id: "6",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "rejected",
    },
    {
      id: "7",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "rejected",
    },
    {
      id: "8",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
    {
      id: "9",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
    {
      id: "10",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
    {
      id: "11",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
    {
      id: "12",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
    {
      id: "13",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
    {
      id: "14",
      title: "Job Title",
      company: "company Name",
      department: "Department",
      location: "location",
      contact: "12345",
      experience: "7-10yrs",
      jobtype: "Full Time",
      candidates: ["candidate 1", "candidate 2", "candidate 3"],
      income: "23-25 Lakhs",
      status: "",
    },
  ],
  candidates: [
    {
      id: "0",
      name: "candidate 4",
    },
    {
      id: "1",
      name: "candidate 5",
    },
    {
      id: "2",
      name: "candidate 6",
    },
    {
      id: "3",
      name: "candidate 7",
    },
  ],
};

export const JobList = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ACCEPT_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job, key) => {
          if (key === action.index) {
            return (job.status = "accepted");
          } else {
            return job;
          }
        }),
      };
    case REJECT_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job, key) => {
          if (key === action.index) {
            return (job.status = "rejected");
          } else {
            return job;
          }
        }),
      };
    case ADD_CANDIDATE:
      return {
        ...state,
        jobs: state.jobs.filter((job, key) => {
          if (key === action.payload.index && action.payload.candidate !== null) {
            return job.candidates.push(action.payload.candidate);
          } else {
            return job;
          }
        }),
      };
    default:
      return state;
  }
};

