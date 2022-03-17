import React from "react";

export default function ShowLibrary(props) {
    if (props.error) {
      return <div>Error: {props.error.message}</div>;
    } else if (!props.isLoaded) {
      return <div>Loading ....</div>;
    } else {
      return (
        <div>
          <ul>
            <li>{props.items.name}</li>
            <li>{props.items.default_language}</li>
            <li>{props.items.homepage}</li>
            <li>{props.items.project_count}</li>
            <li>{props.items.color}</li>
          </ul>
        </div>
      );
    }
  }