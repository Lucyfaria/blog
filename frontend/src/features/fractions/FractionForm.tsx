import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {createFractionAsync} from './fractionSlice';

function FractionForm() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [pearl, setPearl] = useState('');
  const [smoke, setSmoke] = useState('');
  const [lights, setLights] = useState('');
  const [contract, setContract] = useState('');
  const [plate, setPlate] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      fraction: {
          name: name,
          primary: primary,
          secondary: secondary,
          pearl: pearl,
          smoke: smoke,
          lights: lights,
          contract: contract,
          plate: plate,
      }
    }
    dispatch(createFractionAsync(formData));
    resetState();
  }

  function resetState() {
    setName('');
    setPrimary('');
    setSecondary('');
    setPearl('');
    setSmoke('');
    setLights('');
    setContract('');
    setPlate('');

  }
  
  return <div>
    <h1>FractionForm</h1>
    <form>
      <input
        type="text"
        className="form-control text-start"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <textarea
        className="form-control text-start"
        name="primary"
        value={primary}
        onChange={(e) => setPrimary(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  </div>;
}

export default FractionForm;