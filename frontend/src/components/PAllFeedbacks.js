import React, {useState, useEffect} from 'react';
import axios from "axios";  //send our form data to the mock server
import { NavLink } from "react-router-dom";
import { Button,Table,useParams } from "react-router-dom";
import Feedback from 'react-bootstrap/esm/Feedback';
import Update from './UpdateFeedback';
import UpdateFeedback from './UpdateFeedback';
 
 


export default function AllFeedbacks(){   

    //creating states
    const[feedbackList,SetFeedbackList] = useState([]);

    const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [message,setMessage] = useState("");
 

    useEffect(() =>{ //view all the feedbacks
        axios.get(`http://localhost:5000/Feedback/readf`).then((response) => { //pass response as a function
          SetFeedbackList(response.data);
        });
      }, []);

     
    return(
        <div className="container">
            <br></br>
            <h1>Passenger feedbacks and complaints</h1><br></br>
            <table class ="table table-hover border shadow">
              <thead class="thead-dark">
                  <tr>
                   
                      <th scope="col">Number</th> 
                      <th scope="col">ID</th>
                      <th scope="col">Username</th> 
                      <th scope="col">Email Address</th>
                      <th scope="col">Type</th>
                      <th scope="col">Contact Number</th> 
                      <th scope="col">Message</th>
                       
                      </tr>
                      </thead>
              <tbody>
            {feedbackList.map((val,key) =>( //mapping data to table 
                <tr>                
                  
                <th scope="row">{key +1}</th>    
                <td>{val._id}</td>
                <td>{val.username}</td>
                <td> {val.email}</td>
                <td>  {val.type}</td>
                <td> {val.contactNumber}</td>
                <td>   {val.message}</td>

                 
                </tr>
            ))}
               </tbody> </table>
                <h3 class="topi" >We would love to hear from you🖤🖤</h3>
               </div>
  
                  
  )

       
  
}
        
 
