import React from "react";
import { alertIcon } from "../../svgs";

export default function ErrorFetchingResources() {
  return (
    <div className="error-fetching-container">
      {alertIcon}
      <h3 className="error-fetching-heading">
        Something went wrong while fetching resources
      </h3>

      <div className="error-fetching-content">
        <p>If in development mode:</p>

        <ul className="error-fetching-list">
          <li>Make sure the development server is running</li>
          <li>Check that the address you're trying to fetch from exists</li>
        </ul>

        <p>Otherwise</p>
        <ul className="error-fetching-list">
          <li>Try again</li>
        </ul>
      </div>
      <button
        className="reload-button"
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
}
