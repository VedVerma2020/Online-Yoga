import React  from 'react';
import {Link} from 'react-router-dom';
import './login.css';
const AdminLogin = () => {  
  const uname="admin",pass="1234";
	const submitThis=()=>{
		if((uname === "admin")&&(pass === "1234"))
    {
      <Link to="/adminControl"/>
    }
	}

  return (
    <div className="login-page container logpg">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <form action='/adminControl'>
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input type="text" name='uname' id='uname' className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" name='pass' id='pass' className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>
            <div className="from-group mt-5">
              <button type='submit' className='btn btn-brand' onClick={submitThis}>Login</button>
              <a href='/login' className='lp'>User Login Page</a>
            </div>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;