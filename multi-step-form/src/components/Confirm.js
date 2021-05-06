function Confirm(props) {

  const next = e => {
    e.preventDefault();
    props.nextStep()
  }
    
  const back = e => {
    e.preventDefault();
    props.prevStep()
  }
  
  return (
    <div>
      <ul>
        <li>{props.age}</li>
        <li>{props.firstName}</li>
        <li>{props.lastName}</li>
        <li>{props.occupation}</li>
        <li>{props.city}</li>
      </ul>
      <button onClick={back}>Back</button>
      <button onClick={next}>Confirm</button>
    </div>
    
  );
}

export default Confirm;