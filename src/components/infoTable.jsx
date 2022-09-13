import React, { useState } from "react";
import { CLAIMS_MAPPING, flatten } from "../sdk/api";

/**
 * React component for displaying user ID token information of data from the UserInfo endpoint, that returns claims about the authenticated end user
 */
const InfoTable = (props) => {
  const [show, setShow] = useState(false);

  const userData = props.data ? flatten(props.data) : null;
  return show && userData ? (
    <div>
      <div className="input-field">
        <table className="table">
          <thead>
            <tr>
              <th>Claim</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.data).map((key) => (
              <tr key={key}>
                <td>{CLAIMS_MAPPING[key] ? CLAIMS_MAPPING[key] : key}</td>
                <td>{props.data[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="input-field">
        <button type="button" onClick={(_e) => setShow(false)}>
          Hide {props.btnLabel}
        </button>
      </div>
    </div>
  ) : (
    <div className="input-field">
      <button type="button" onClick={(_e) => setShow(true)}>
        Show {props.btnLabel}
      </button>
    </div>
  );
};

export default InfoTable;
