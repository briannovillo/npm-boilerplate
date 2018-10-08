/*
   Retrieve data from MAM service and put them on component state.
   @param {Number} id - ID of the MAM event.
   */
import fetch from "node-fetch";

export const getData = (host, id) => {
  return fetch(`${host + id}`, {
      method: 'GET'
    })
    .then((res) => {
      return res.json();
    });
};
