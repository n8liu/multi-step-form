import { useCallback } from 'react'

function Step1({age, onAgeChange, nextStep, prevStep}) {
  
  const next = e => {
    e.preventDefault();
    nextStep()
  }
  
  const handleAgeChange = useCallback(event => {
    onAgeChange(event.target.value)
  }, [onAgeChange])

  return(
    <div>
      <input onChange={handleAgeChange} value={age}/>
      <button onClick={next}>Continue</button>
    </div>
  );
}

export default Step1;