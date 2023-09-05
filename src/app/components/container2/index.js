import React from 'react'
import "./style.css"
const Welcomecontainer = () => {
  return (
    <div className="design-container2">
        <h2>Welcome to the Dashboard,David!</h2>
        <p className="text">
          We recommended you to complete 2 mandatory courses and upload your
          transcript to a live Event you had last week
        </p>
        <h5>INTRESTING FACTS FROM REPORTS</h5>
        <div className="active-rating">
            <div className="active-students">
              <label>412</label>
              <label>Active Students</label>
            </div>
            <div className="completion-rating">
            <label>92%</label>
              <label>Completion rating</label>
            </div>
        </div>
        <div className="see-full-report">see full report</div>
      </div>
  )
}

export default Welcomecontainer