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
   <h1>Neue Fraktion hinzufügen</h1>
  <form className="row g-3">
    <div className="col-md-12">
        <label htmlFor="name" className="form-label">Fraktionsname</label>
        <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control" 
        id="name"/> 
    </div>
    <div className="col-4">
        <label htmlFor="primary" className="form-label">Primärfarbe</label>
        <input 
        type="text" 
        value={primary}
        onChange={(e) => setPrimary(e.target.value)}
        className="form-control" 
        id="primary"/> 
    </div>
    <div className="col-4">
        <label htmlFor="secondary" className="form-label">Sekundärfarbe</label>
        <input 
        type="text"
        value={secondary}
        onChange={(e) => setSecondary(e.target.value)}
        className="form-control" 
        id="secondary"/> 
    </div>
    <div className="col-4">
        <label htmlFor="pearl" className="form-label">Perleffekt</label>
        <input 
        type="text"
        value={pearl}
        onChange={(e) => setPearl(e.target.value)}
        className="form-control"
        id="pearl"/> 
    </div>
    <div className="col-6">
        <label htmlFor="smoke" className="form-label">Reifenqualm</label>
        <input 
        type="text" 
        value={smoke}
        onChange={(e) => setSmoke(e.target.value)}
        className="form-control" 
        id="smoke"/> 
    </div>
    <div className="col-6">
        <label htmlFor="lights" className="form-label">Unterbodenbeleuchtung</label>
        <input 
        type="text"
        value={lights}
        onChange={(e) => setLights(e.target.value)}
        className="form-control" 
        id="lights"/> 
    </div>
   
    <div className="col-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Inklusive Kennzeichen
    </label>
    </div>
  </div>
  <div className="col-8">
    <div className="form-check">
    <label className="form-check-label" htmlFor="gridCheck">
        Vertrag bis 
    </label>
    <input type="date"></input>
    </div>
  </div>
    <div className="col-2">
        <button type="submit" className="btn btn-primary" onClick={(e) => submitHandler(e)}>Hinzufügen</button>
    </div>
  </form>
      {/* <input
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
          onClick={(e) => submitHandler(e)}>Submit</button> */}
    
  </div>;
}

export default FractionForm;