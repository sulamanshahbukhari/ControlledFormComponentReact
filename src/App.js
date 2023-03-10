import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    if(firstName && lastName && validateEmail(email) && password.value)
    { return true; }
    return;
    
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({...password,value:"",isTouched:false})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="fname">
              First name <sup>*</sup>
            </label>
            <input placeholder="First name"
              id="fname"
              value={firstName}
              onChange={e=>setFirstName(e?.target.value)}
            />
          </div>
          <div className="Field">
            <label htmlFor='lname'>Last name</label>
            <input placeholder="Last name"
              id='lname'
              value={lastName}
              onChange={e=>setLastName(e.target.value)}
            
            />
          </div>
          <div className="Field" >
            <label htmlFor='emailaddress'>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address"
              id='emailaddress'
              value={email}
              onChange={e=>setEmail(e.target.value)}
              
            />
          </div>
          <div className="Field">
            <label htmlFor='pass'>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password"
              id='pass'
              type='password'
              value={password.value}
              onChange={e => setPassword({...password, value: e.target.value,isTouched:true } )}
            
            />
            {password.value.length < 8 && password.isTouched==true ?  PasswordErrorMessage() : null}
          </div>
          <div className="Field">
            <label htmlFor='role'>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={e=>setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" onSubmit={(e)=>handleSubmit()} disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
