import { ACCEPT_JOB, REJECT_JOB, ADD_CANDIDATE } from "./ActionTypes";

export const addAccepted = (index) => ({
  type: ACCEPT_JOB,
  index: index,
});

export const addRejected = (index) => ({
  type: REJECT_JOB,
  index: index,
});

export const addCandidate = (index, candidate) => ({
  type: ADD_CANDIDATE,
  payload: {
    index: index,
    candidate: candidate,
  },
});
