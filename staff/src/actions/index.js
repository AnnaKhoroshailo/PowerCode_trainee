import axios from "axios";
import { API } from "../constants/api.js";
export const asyncGetStaff = () => (dispatсh) => {
  axios(`${API}/staff`)
    .then((response) => {
      dispatсh({ type: "FETCH_LIST_STAFF", payload: response.data });
    })
    .catch((error) => {
      console.log(error.response);
    });
};
export const asyncGetWorker = (id) => (dispatсh) => {
  axios(`${API}/staff/${id}`)
    .then((response) => {
      dispatсh({ type: "ADD_WORKER", payload: response.data });
    })
    .catch((error) => {
      console.log(error.response);
    });
};
export const asyncAddWorker = (worker) => (dispatсh) => {
  axios
    .post(`${API}/staff`, worker)
    .then((response) => {
      dispatсh({ type: "ADD_WORKER", payload: response.data });
    })
    .catch((error) => {
      console.log(error.response);
      dispatсh({ type: "ADD_WORKER", payload: worker });
    });
};
export const asyncDeleteWorker = (id, worker) => (dispatсh) => {
  axios
    .delete(`${API}/staff/${id}`)
    .then(() => {
      dispatсh({ type: "DELETE_WORKER", payload: worker });
    })
    .catch((error) => {
      console.log(error.response);
      dispatсh({ type: "DELETE_WORKER", payload: worker });
    });
};
export const asyncUpdateWorker = (id, worker) => (dispatсh) => {
  axios
    .put(`${API}/staff/${id}`, worker)
    .then((response) => {
      dispatсh({ type: "UPDATE_WORKER", payload: response.data });
    })
    .catch((error) => {
      console.log(error.response);
      dispatсh({ type: "UPDATE_WORKER", payload: { id: +id, ...worker } });
    });
};
export const asyncLogIn = (user) => () => {
  axios(`${API}/admin?login=${user.login}&password=${user.password}`)
    .then((response) => {
      sessionStorage.setItem("user", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error.response);
    });
};
