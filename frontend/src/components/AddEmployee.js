import React, {useState} from "react";
import axios from "axios";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";

export default function AddEmployee() {
    const[empID, setEmpID] = useState("");
    const[full_name, setfull_name] = useState("");
    const[dob, setdob] = useState("");
    const[age, setage] = useState("");
    const[gender, setgender] = useState("");
    const[nic, setnic] = useState("");
    const[nationality, setnationality] = useState("");
    const[marital_status, setmarital_status] = useState("");
    const[phoneNo, setphoneNo] = useState("");
    const[email, setemail] = useState("");
    const[add, setadd] = useState("");
    const[regDate, setregDate] = useState("");
    

    function sendData(e){

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert("Invalid Email!");
            
        }
        else if(!(full_name.trim().length > 5)){
            alert("Invalid Full Name!")
            
        }
        else if(!(empID.length<6)){
            alert("Invalid Employee ID");
            
        }

        e.preventDefault();//to prevent normal behavior of submit
        
        const newEmployee ={

            empID,
            full_name,
            dob,
            age,
            gender,
            nic,
            nationality,
            marital_status,
            phoneNo,
            email,
            add,
            regDate
        }
       
        axios.post("http://localhost:5000/employee/add",newEmployee).then(()=>{
            alert("Employee Added");
            window.location = `/`;
            
        }).catch((err)=>{
            alert("err");
            console.log(err.message);
        })

    }

    return(
        
        <div className="container"><br/>
         <nav className="nav">
            <Link to="/employeeManagementHome" className="nav-link">Home</Link>
         </nav><br/><br/>
            <h1>Employee Registration</h1><br/>
            <form className="form" onSubmit={sendData}>
                <div className="mb-3">
                    <label for="empID" className="form-label">Employee ID</label>
                    <input type="text" className="form-control" id="empID" onChange={(e)=>{
                        setEmpID(e.target.value);//updating state using value taken from the form 
                    }} required/>
                </div>
                <div className="mb-3">
                    <label for="full_name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="full_name" onChange={(e)=>{
                        setfull_name(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="dob" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" onChange={(e)=>{
                        setdob(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="age" className="form-label">Age</label>
                    <input type="number" class="form-control" id="age" min="18" max="70" onChange={(e)=>{
                        setage(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" onChange={(e)=>{
                        setgender(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="nic" className="form-label">NIC</label>
                    <input type="text" className="form-control" id="nic" maxlength="10" onChange={(e)=>{
                        setnic(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="nationality" className="form-label">Nationality</label>
                    <input type="text" className="form-control" id="nationality" onChange={(e)=>{
                        setnationality(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="marital_status" className="form-label">Marital Status</label>
                    <input type="text" className="form-control" id="marital_status" onChange={(e)=>{
                        setmarital_status(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="phoneNo" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="phoneNo" maxlength="10" onChange={(e)=>{
                        setphoneNo(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" onChange={(e)=>{
                        setemail(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="add" className="form-label">Postal Address</label>
                    <input type="text" className="form-control" id="add" onChange={(e)=>{
                        setadd(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="regDate" className="form-label">Date of Registration</label>
                    <input type="date" className="form-control" id="regDate" onChange={(e)=>{
                        setregDate(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div><br/><br/>
                
                <button type="submit" className="btn btn-primary">Register</button>
            </form><br/><br/>
        </div>
    )
}