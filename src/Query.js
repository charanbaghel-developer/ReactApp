
import img2 from "./images/model2.jpg";
import './Query.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";

function Query()
{
    const [enquery, setEnquery] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Subject:"",
    Desc:""
  });
 const handleChange = (e) => {
  const { name, value } = e.target;
  let error = "";

  // Live validation per field
  if (!value.trim()) {
    if (name === "FirstName") error = "First1 Name is required";
    if (name === "LastName") error = "Last Name is required";
    if (name === "Subject") error = "Subject is required";
   
    if (name === "Email") error = "Email is required";
  } 
  else if (name === "Email" && !/^\S+@\S+\.\S+$/.test(value)) {
    error = "Invalid email format";
  }

  setEnquery({
    ...enquery,
    [name]: value
  });

  setErrors({
    ...errors,
    [name]: error
  });
};


  const [errors, setErrors] = useState({});
  // ✅ Validation logic
  const validate = () => {
    let newErrors = {};

    if (!enquery.FirstName.trim())
      newErrors.FirstName = "First Name is required";

    if (!enquery.LastName.trim())
      newErrors.LastName = "Last Name is required";

    if (!enquery.Email.trim())
      newErrors.Email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(enquery.Email))
      newErrors.Email = "Invalid email format";

    if (!enquery.Subject.trim())
      newErrors.Subject = "Subject is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
   const handleSubmit = async (e) => {
    e.preventDefault();

if (!validate()) return; // ❌ stop submit if invalid

    const response = await fetch("https://localhost:7224/api/Membe/SaveEnqueryDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(enquery)
    });

    const data = await response.json();
    alert("Saved successfully!");
    setEnquery({
        FirstName: "",
        LastName: "",
        Email: "",
        Subject: "",
        Desc: ""
      });
      setErrors({});
  };
    return(
        <>
       
    <div className="container">
        <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Get In Touch</span></p>
            <h1 className="mb-3">Contact Us For Any Query</h1>
            <h4 className="text-center mb-4">Receive messages instantly with our PHP and Ajax contact form - available in the <a href="https://htmlcodex.com/downloading/?item=1144">Pro Version</a> only.</h4>
                
        </div>
        <div className="row">
            <div className="col-lg-7 mb-5">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="control-group mb-3">
                            <input type="text" className="form-control" name="FirstName" placeholder="First Name" value={enquery.FirstName} onChange={handleChange}/>
                            <small className="text-danger">{errors.FirstName}</small>
                        </div>
                        <div className="control-group mb-3">
                            <input type="text" className="form-control" name="LastName" placeholder="Last Name" value={enquery.LastName} onChange={handleChange}/>
                            <small className="text-danger">{errors.LastName}</small>
                        </div>
                        <div className="control-group mb-3">
                            <input type="email" className="form-control" placeholder="Your Email" name="Email" value={enquery.Email} onChange={handleChange} />
                            <small className="text-danger">{errors.Email}</small>
                        </div>
                        <div className="control-group mb-3">
                            <input type="text" className="form-control" placeholder="Subject" name="Subject" value={enquery.Subject} onChange={handleChange} />
                            <small className="text-danger">{errors.Subject}</small>
                        </div>
                        <div className="control-group mb-3">
                            <textarea className="form-control" rows="6" placeholder="Message" name="Desc" value={enquery.Desc} onChange={handleChange}></textarea>
                           
                        </div>
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <div className="d-flex">
                    <i className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
                    <div className="pl-3">
                        <h5>Address</h5>
                        <p>123 Street, New York, USA</p>
                    </div>
                </div>
                <div className="d-flex">
                    <i className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
                    <div className="pl-3">
                        <h5>Email</h5>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className="d-flex">
                    <i className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
                    <div className="pl-3">
                        <h5>Phone</h5>
                        <p>+012 345 67890</p>
                    </div>
                </div>
                <div className="d-flex">
                    <i className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle" style={{ width: '45px', height: '45px' }}></i>
                    <div className="pl-3">
                        <h5>Opening Hours</h5>
                        <strong>Sunday - Friday:</strong>
                        <p className="m-0">08:00 AM - 05:00 PM </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </>
    );
}
export default Query;