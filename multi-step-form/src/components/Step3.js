import { useCallback } from 'react'

function Step3(props) {
  
  const next = e => {
    e.preventDefault();
    props.nextStep()
  }

  const back = e => {
    e.preventDefault();
    props.prevStep()
  }
  
  const handleOccupationChange = useCallback(event => {
    props.onOccupationChange(event.target.value)
  }, [props.onOccupationChange])

  const handleCityChange = useCallback(event => {
    props.onCityChange(event.target.value)
  }, [props.onCityChange])

  return(
    <div>
      <input onChange={handleOccupationChange} value={props.occupation}/>
      <input onChange={handleCityChange} value={props.city}/>
      <button onClick={back}>Back</button>
      <button onClick={next}>Continue</button>
    </div>
  );
}

export default Step3;