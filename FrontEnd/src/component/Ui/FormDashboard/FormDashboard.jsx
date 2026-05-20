import { useState } from "react";
function FormDashboard({ setIsDraft }){
  const [formData, setFormData] = useState({
    email: "",
    password: ""
});

function handleChange(e){

    const updatedData = {
        ...formData,
        [e.target.name]: e.target.value
    };

    setFormData(updatedData);

    const hasData =
        updatedData.email.trim() !== "" ||
        updatedData.password.trim() !== "";

    setIsDraft(hasData);
}
    return(
       <div className="container">
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input
       type="email"
       className="form-control"
       id="exampleInputEmail1"
       aria-describedby="emailHelp"
       name="email"
       value={formData.email}
       onChange={handleChange}
         />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      name="password"
      value={formData.password}
      onChange={handleChange}
       />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
       </div>
    )
}
export default FormDashboard;