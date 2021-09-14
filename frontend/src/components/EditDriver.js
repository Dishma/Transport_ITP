import React, {Component} from "react";
import axios from "axios";

export default class EditDriver extends Component{


    constructor(props){
        super(props);
        this.state={
            fName:"",
            lName:"",
            age:"",
            address:""
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        
        e.preventDefault();
        const id = this.props.match.params.id;

        const {fName,lName,age,address} = this.state;

        const data = {
            fName:fName,
            lName:lName,
            age:age,
            address:address
        }
        console.log(data)

        axios.put(`/driver/update/${id}`, data).then((res)=>{
            if(res.data.success){
                alert("Driver Updated!")
                this.setState(
                    {
                        fName:"",
                        lName:"",
                        age:"",
                        address:""
                    }
                )
            }
        })
    }





    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/driver/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    fName:res.data.driver.fName,
                    lName:res.data.driver.lName,
                    age:res.data.driver.age,
                    address:res.data.driver.address
                });

                console.log(this.state.driver);
            }
        });
    }

    render() {
        return(

            <div>


            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-current="page" href="#">Siyatha Transports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/driverhome">Drivers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adminPanel">Home</a>
                    </li>
                    </ul>
            </div>


            <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Edit Drivers</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>First Name</label>
                        <input type="text" 
                               className="form-control"
                               name="fName"
                               value={this.state.fName}
                               onChange={this.handleInputChange} ></input>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Last Name</label>
                        <input type="text" 
                               className="form-control"
                               name="lName"
                               value={this.state.lName}
                               onChange={this.handleInputChange} ></input>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Age</label>
                        <input type="number" 
                               className="form-control"
                               name="age"
                               value={this.state.age}
                               onChange={this.handleInputChange} ></input>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type="text" 
                               className="form-control"
                               name="address"
                               value={this.state.address}
                               onChange={this.handleInputChange} ></input>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-save"></i>&nbsp; Update
                    </button>

                </form>
        </div>
        </div>
        )
    }
}