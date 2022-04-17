
import React,{useState} from 'react'
import './App.css';
import Navbar from './custom_components/Navbar';
import Textform from './custom_components/Textform';
import Alert from './custom_components/Alert';
function App() {
  const [mode, setMode] = useState({
    mode:"light",
    text:"Enable Dark Mode"
  });
  const [contentClass, setContentClass] = useState("");
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  function toggleMode(){
    if(mode.mode == "light"){
      setMode({
        mode:"dark",
        text:"Disable Dark Mode"
      });
      document.body.style.backgroundColor = "#000066";
      setContentClass("body-content");
      showAlert("Dark Mode Successfully Enabled","success");
    }else if(mode.mode == "dark"){
      setMode({
        mode:"light",
        text:"Enable Dark Mode"
      });
      document.body.style.backgroundColor = "white";
      setContentClass("");
      showAlert("Dark Mode Disabled","warning");
    }
    // if(localStorage.getItem("check") == "true"){
    //   document.getElementById("flexSwitchCheckDefault").setAttribute("checked",true);
    //   console.log("waghri");
    // }else{
    //   document.getElementById("flexSwitchCheckDefault").removeAttribute("checked");
    // }
  }
  
  return (
    <>
      <Navbar title="TextUtils" about = "About TextUtils" modesent = {mode} toggleMode = {toggleMode}/>
      <Alert alert_content = {alert}/>
      <div className = "container my-3">
      <Textform innerh1 = "Enter Text below :" content_color = {contentClass}/>
      </div>
    </>
  );
}

export default App;
