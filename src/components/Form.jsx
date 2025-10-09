import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const handleSubmit = () => {
    if(regexEmail.test(email)){
      console.log("Valid email");
      
    }else if(email == ""){
    console.log("This email field is required");
    
    } else{
      console.log("Invalid email");
      
    }
    localStorage.setItem("user", JSON.stringify({ name, email }));
    console.log(name, email);
    if (phone == "") {
      setPhoneErr("This field is required")
      // console.log(phoneErr, "This field is required");
    } else if(phone.length < 11 || phone.length > 11){
      setPhoneErr("Phone number must be 11 digits")
      // console.log(phoneErr, "Phone number must be 10 digits");
    } else if(!(phone.startsWith("081") == false ) || (phone.startsWith("090") == false) || (phone.startsWith("091") == false) || (phone.startsWith("080") == false) || (phone.startsWith("070") || false) && (phone.startsWith("071") || false) && (phone.startsWith("081") == false) || (phone.startsWith("091") == false)){
     setPhoneErr("Phone number is invalid")
  }}
  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{phoneErr}</p>
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </>
  );
};

export default Form;
