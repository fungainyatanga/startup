import React from "react";
import Help from "../assets/svg/05-help_section/01-help.svg";
interface SupportProps{
id: string;
}

const Support = (props: SupportProps) => {
    return (
      <div className="support-section" id={props.id}>
        <div className="support-header">
          <h2>Need Help?</h2>
        </div>
        <div className="support-article">
          <form action="">
            <div className="form-container">
              <h2>Subscribe to our NewsLetter</h2>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email Address" required />
              <select>
                <option value="options">Select your profession</option>
                <option value="option-1">Student</option>
                <option value="option-2">Business Organization</option>

                <option value="option-3">Other</option>
              </select>
              <label className="check-box">
                <input type="checkbox" />
                Weekly NewsLetter
              </label>
              <input type="submit" value="Subscribe" />
            </div>
          </form>
          <img src={Help} alt="help" />
        </div>
      </div>
    );
}


export default Support;