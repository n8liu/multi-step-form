import { useState } from 'react'

import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'
import Confirm from './Confirm.js'
import Success from './Success.js'

function UserForm() {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [city, setCity] = useState('');

  //functions
  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  switch(step) {
    case 1:
      return (
        <div>
          <Step1 
            age={age} 
            onAgeChange={setAge}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
      );
    
    case 2:
      return (
        <div>
          <Step2 
            firstName={firstName}
            lastName={lastName} 
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
    );

    case 3:
      return (
        <div>
          <Step3 
            occupation={occupation}
            city={city} 
            onOccupationChange={setOccupation}
            onCityChange={setCity}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
    );

    case 4:
      return (
        <div>
          <Confirm
            age={age}
            firstName={firstName}
            lastName={lastName}
            occupation={occupation}
            city={city} 
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
    );

    case 5:
      return (
        <div>
          <Success
            firstName={firstName}
            lastName={lastName}
            prevStep={prevStep}
          />
        </div>
    );
  }
}

export default UserForm;