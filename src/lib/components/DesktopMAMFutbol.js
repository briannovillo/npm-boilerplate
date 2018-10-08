import React from "react";
import './DesktopMAMFutbol.scss';
import {LoadingSpinner} from "./LoadingSpinner";

export const DesktopMAMFutbol = (props) => (
  <div className="mam desktop">
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
            <div className="local"><div className={"team"}>{props.local}</div><div className="goals">{props.localGoals}</div></div>
          </div>
          <div className="col middle"> - </div>
          <div className="col right">
            <div className="visitor"><div className="goals">{props.visitorGoals}</div><div className={"team"}> {props.visitor}</div></div>
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
