import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  // const check = (e)=>{
  //   var values = document.getElementById("flexSwitchCheckDefault").checked;
  //   var btn = document.getElementById("flexSwitchCheckDefault");
  //   if(values){
  //     btn.setAttribute("checked",true);
  //     localStorage.setItem("check", values);
  //     console.log("success");
  //   }else{
  //     btn.removeAttribute("checked");
  //     localStorage.setItem("check", values);
  //   }
   
  // }
  // const local = ()=>{
    
  // }
  
  // var values = document.getElementById("flexSwitchCheckDefault");
  //   //var btn = document.getElementById("flexSwitchCheckDefault");
  //   if(values.checked){
  //     btn.setAttribute("checked",true);
  //     console.log("success");
  //   }else{
  //     btn.removeAttribute("checked");
  //     console.log("Failed");
  //   }
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch text-light">
              <input className="form-check-input" onClick = {props.toggleMode}   value="1" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modesent.text}</label>
              
            </div>
          </div>
        </div>
      </nav>
    )
   
}

// Navbar.propTypes = {
//   title:PropTypes.string,
//   about:PropTypes.string,
// }

// Navbar.defaultProps = {
//   title:'set title here',
//   about:'set here'
// }