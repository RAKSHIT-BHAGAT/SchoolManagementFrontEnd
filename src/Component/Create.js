import axios from 'axios';
import React, { useState } from 'react';

const Create = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");

  const header = {"Access-Control-Allow-Origin": "*"};
   var name = "Maths";
   var subject = "Maths";
   var standard = 4;
   var data = {name,subject,standard};
  const handleSubmit = (e) => {
    debugger;
    //e.preventdefault; 
    console.log ('clicekd');
      axios.post('https://localhost:7218/api/Books/CreateBook',data).then((response) => {
        console.log(response);
        
      }).catch((error) => console.log(error));

  }


  return <>
  <h2>Create</h2>
  <form>

  <div classsName="mb-3">
      <label classsName="form-label">
      Name </label>
      <input type="text" 
      classsName="form-control"
      onChange={(e) => setName(e.target.value)}
      />
    </div>
  
    <div classsName="mb-3">
      <label classsName="form-label">
      Email address </label>
      <input type="email" 
      classsName="form-control" 
      aria-describedby="emailHelp"
      onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  
    <button type="submit" classsName="btn btn-primary" onClick={handleSubmit}>
      Submit</button>
  </form>
  
  </>
};

export default Create