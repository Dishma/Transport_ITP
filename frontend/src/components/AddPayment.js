import React,{useState} from "react";
import { Form, Button, Image} from "react-bootstrap";
import axios from "axios";




export default function AddPayment(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setCode] = useState("");
    const [phonenum, setNum] = useState("");
    const [cardnum, setCard] = useState("");
    const [expirydate, setDate] = useState("");
    const [ccv, setCcv] = useState("");

    function sendData1(e) {
      e.preventDefault();
      
      const newPayment = {
        name,
        address,
        city,
        postalcode,
        phonenum,
        
      }

      
      
      axios.post("http://localhost:5000/payment/add", newPayment).then(()=>{
        alert("Payment details was recorded by assuring security");
      }).catch((err)=>{
          alert(err)
      })

    }

    function sendData2(e) {
      e.preventDefault();
      
      const newPayment = {
        cardnum,
        expirydate,
        ccv
      }

      
      
      axios.post("http://localhost:5000/payment/add", newPayment).then(()=>{
        alert("Payment details was recorded by assuring security");
        window.location=`/success`;
      }).catch((err)=>{
          alert(err)
      })

    }

    function toggleText() {
      var x = document.getElementById("payId");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    return(
        <div class="container">
         
         <Form onSubmit={sendData1}>
  <Form.Group controlId="container">
    <Form.Label for="name">Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" 
    onChange={(e)=>{
      setName(e.target.value);
    }} required/>
    <Form.Text className="text-muted">
      For payment purposes, these details will be recorded.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="container">
    <Form.Label for="address">Address</Form.Label>
    <Form.Control type="text" placeholder="Ex: No,Street name" 
     onChange={(e)=>{
      setAddress(e.target.value);
    }} required/>
    </Form.Group>

    <Form.Group controlId="container">
    <Form.Label for="city">City</Form.Label>
    <Form.Control type="text" placeholder="Enter city name" 
    onChange={(e)=>{
      setCity(e.target.value);
    }} required/>
    </Form.Group>

    <Form.Group controlId="container">
    <Form.Label for="postalcode">Postal Code</Form.Label>
    <Form.Control type="text" placeholder="Enter code"
    onChange={(e)=>{
      setCode(e.target.value);
    }} required/>
    </Form.Group>

  <Form.Group>
    <Form.Label for="phonenum">Phone Number</Form.Label>
    <Form.Control type="text" placeholder="07********" 
    onChange={(e)=>{
      setNum(e.target.value);
    }} required/>
  </Form.Group>

  
  <Button variant="primary" type="submit" className="sub">
    Submit
  </Button>
  
  <Button onClick={toggleText} className="pay"> Proceed to payment</Button>
</Form>   


<div id="payId" class="container" className="card1">
 <Image src="https://res.cloudinary.com/dbw0cho6v/image/upload/v1631211287/Siyatha/Card1_etkils.jpg" fluid className="img1" /> 

<Form onSubmit={sendData2}>
  <Form.Group className="pay1" >
<Form.Control as="textarea" rows={1} size="lg" type="text" placeholder="Enter Card Number"
onChange={(e)=>{
  setCard(e.target.value);
}} required />
  </Form.Group>
  <Form.Group controlId="container" className="pay2">
<Form.Control type="text" placeholder="MM/YY" 
onChange={(e)=>{
  setDate(e.target.value);
}} required/>
  </Form.Group>
  <Form.Group controlId="container" className="pay3">   
<Form.Control type="text" placeholder="Enter CCV" 
onChange={(e)=>{
  setCcv(e.target.value);
}} required/>
  </Form.Group>

  <Button variant="primary" type="submit" className="sub1" >
    Pay
  </Button>
</Form>
</div>


     </div>

  
    )
}
