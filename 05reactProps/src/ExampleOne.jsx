// import React from "react";

function Example01({ userName = "Guest", post = "Not Available", ispermanent = false }) {
  
  return (
    <div className="student">
      <p>Name: {userName}</p>
      <p>Position: {post}</p>
      <p>Permanent: {ispermanent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Example01;
