import React from 'react';
import { Link } from 'react-router-dom';
const Home = ({ idd }) => {
  return (
    <div>
        <Link to="/login/addnew" className="btn" id="vbtn">Add New File</Link>
        <Link to="/login/viewprev" className="btn" id="vbtn">Current Version</Link>
        <Link to="/login/edit" className="btn" id="vbtn">Edit File</Link>
        <Link to="/login/previous" className="btn" id="vbtn">See Previous Versions</Link>
        <Link to="/login/delete" className="btn" id="vbtn">Delete File</Link>
    </div>
  );
};

export default Home;