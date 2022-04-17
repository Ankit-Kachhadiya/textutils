import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        var word = word.toLowerCase();
        return word.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
   props.alert_content && <div className={`alert alert-${props.alert_content.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert_content.type)} : </strong> {props.alert_content.msg}
  </div>
  )
}
