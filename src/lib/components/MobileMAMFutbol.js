import React from "react";
import './MobileMAMFutbol.scss';
import {LoadingSpinner} from "./LoadingSpinner";

export const MobileMAMFutbol = (props) => (
  <div className="mam mobile">
    {
      props.loading ?
      <LoadingSpinner /> :
      <React.Fragment>
        <div className='status-container'>
          <div className="col left"></div>
          <div className="col middle status">{props.status}</div>
          <div className="col right"></div>
        </div>
        <div className="teams-container">
          <div className="col left">
            <div className="local">{props.local}</div>
          </div>
          <div className="col middle">{props.localGoals} - {props.visitorGoals}</div>
          <div className="col right">
            <div className="visitor">{props.visitor}</div>
          </div>
        </div>
        <div className="incidence-container">
          <div className="incidence">
            {
              props.incidents.length ?
                props.incidents.map(
                  (incidence, index) => <p key={index}>
                                          {incidence.time}' {incidence.data.half}, {incidence.data.description} ({incidence.data.team === 'local' ? props.local : props.visitor})
                                        </p>
                )
              : props.status
            }
          </div>
        </div>
      </React.Fragment>
    }
  </div>
);
