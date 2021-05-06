import { useCallback } from 'react'

function Step2(props) {
  
  const next = e => {
    e.preventDefault();
    props.nextStep()
  }

  const back = e => {
    e.preventDefault();
    props.prevStep()
  }
  
  const handleFirstNameChange = useCallback(event => {
    props.onFirstNameChange(event.target.value)
  }, [props.onFirstNameChange])

  const handleLastNameChange = useCallback(event => {
    props.onLastNameChange(event.target.value)
  }, [props.onLastNameChange])

  return(
    <div>
      <input onChange={handleFirstNameChange} value={props.firstName}/>
      <input onChange={handleLastNameChange} value={props.lastName}/>
      <button onClick={back}>Back</button>
      <button onClick={next}>Continue</button>
    </div>
  );
}

export default Step2;