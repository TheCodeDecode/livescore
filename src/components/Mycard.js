import React, { Fragment, useState } from "react";

import * as moment from 'moment';
import {
  Dialog
 
} from "@material-ui/core";
import "../App.css";
import { fetchMatchDetail } from "../api/api";

const Mycard = (match) => {
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);

  const getMatchCards = () => {
    return (
      <div style={{ marginBottom: 20 }}  className="col-md-4 ">
        <div className='card'>
          <div   className="background_cover">
            <div className='teamName'>
              <p>{match["team-1"]}</p>
            </div>
            <div className='VsImage'>
              <img src={require("../images/vs.png")} className="img-fluid" alt='live score'/>
            </div>
            <div className='teamName'>
              <p>{match["team-2"]}</p>
            </div>
          </div>
   
        <div className='mb-2'>
          <div  className='text-center p-3'>
            <button
              style={{ marginRight: 10 }}
              className='show-button'
              onClick={() => {
                handleClick(match["unique_id"]);
              }}
            >
              Show Detail
            </button>
            <div className='match-date' >
            {moment(match['dateTimeGMT']).format("MMM Do")}
            </div>
            <div className='match-status' >
            { match['matchStarted'] ? 'Match is finshed' : 'Match is yet to start'}
            </div>
         
          </div>
        </div>
        </div>
      </div>
    );
  };

  function handleClick(id) {
    fetchMatchDetail(id)
      .then((data) => {
        console.log("Match data", data);
        setDetail(data);
        handleOpen();
      })
      .catch((error) => alert("error match data", error));
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getDialog = () => (
    <Dialog open={open} onClose={handleClose}>
      <div className='popup'><p>MATCH STATUS</p></div>
      <div className='content'>
        <div id="alert-dialog-text">
          <p className='description'>{detail.stat}</p>
          <p className='description'>{detail.score}</p>
          <p className='description'>{detail.description}</p>
        </div>
      </div>
      <div className='text-center mb-2'>
        <button  className='btn btn-close' onClick={handleClose}>CLOSE</button>
      </div>
    </Dialog>
  );

  return (
    <Fragment>
      {getMatchCards()}
      {getDialog()}
    </Fragment>
  );
};

export default Mycard;
