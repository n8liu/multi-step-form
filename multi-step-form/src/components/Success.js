function Success(props) {

  const back = e => {
      e.preventDefault();
      props.prevStep()
  }
  
  return (
    <div>
      <h1>Hurray!</h1>
      <p>
        Your data went nowhere, {props.firstName + ' ' + props.lastName} 
      </p>
      <button onClick={back}> Go Back </button>
    </div>
  );
}

export default Success;