import React, { useState } from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { NavBar } from './Components/NavBar';

export function AddNewModel(){
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo]=useState('');
    const[addresLine1, setAddresLine1]=useState('');
    const[addresLine2, setAddresLine2]=useState('');
    const[zip, setZip]=useState('');
    const[city, setCity]=useState('');
    const[country, setCountry]=useState('');
    const [birthDate, setBirthDate] = useState('');
    //const [birthTime] = useState(':00.000Z');

    const[nationality, setNationality]=useState('');
    const[height, setHeight]=useState(0);
    const[shoeSize, setShoeSize]=useState(0);
    const[hairColor, setHairColor]=useState('');
    const[eyeColor, setEyeColor]=useState('');
    const[comments, setComments]=useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();
        //const dateTime = `${birthDate}`; // Make sure this format is correct
    
        try {
            const response = await axios.post('http://localhost:7181/api/Models', 
                { firstName, lastName, email, phoneNo, addresLine1, addresLine2, zip, 
                    city, country, birthDate, nationality, height, 
                    shoeSize, hairColor, eyeColor, comments, password }, 
                {    headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'accept': 'text/plain'
                    
                }
            });
    
            console.log("Model added");
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Submit failed. Check that you have filled out all the required fields.');
        }
    };
    
    
    return (
        <div className="container"> 
            <h2>Add a new model</h2>
            <p>Enter model-information in the following text-boxes:</p>
        <form onSubmit={handleSubmit}className="form-shared"> 
            <input
            className="form-input" 
            type="text"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="First Name"
            required
            />
            <input
            className="form-input" 
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Last Name"
            required
            />
            <input
            className="form-input" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />
            <input
            className="form-input" 
            type="tel"
            value={phoneNo}
            onChange={(e)=>setPhoneNo(e.target.value)}
            placeholder="Phone No"
            required
            />
            <input
            className="form-input" 
            type="text"
            value={addresLine1}
            onChange={(e)=>setAddresLine1(e.target.value)}
            placeholder="Addres Line 1"
            required
            />
            <input
            className="form-input" 
            type="text"
            value={addresLine2}
            onChange={(e)=>setAddresLine2(e.target.value)}
            placeholder="Addres Line 2"
            />
            <input
            className="form-input" 
            type="text"
            value={zip}
            onChange={(e)=>setZip(e.target.value)}
            placeholder="Zip code"
            required
            />
            <input
            className="form-input" 
            type="text"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            placeholder="City"
            required
            />
            <input
            className="form-input" 
            type="text"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
            placeholder="Country"
            required
            />
           <input
           className="form-input" 
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
            />
            <input
            className="form-input" 
            type="text"
            value={nationality}
            onChange={(e)=>setNationality(e.target.value)}
            placeholder="Nationality"
            required
            />
            <input
            className="form-input" 
            type="number"
            value={height || ''}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
            required
            />
            <input
            className="form-input" 
            type="number"
            value={shoeSize || ''}
            onChange={(e) => setShoeSize(e.target.value)}
            placeholder="Shoe Size"
            required
            />
            <input
            className="form-input" 
            type="text"
            value={hairColor}
            onChange={(e)=>setHairColor(e.target.value)}
            placeholder="Hair Color"
            required
            />
            <input
            type="text"
            value={eyeColor}
            onChange={(e)=>setEyeColor(e.target.value)}
            placeholder="Eye Color"
            required
            />
            <input
            type="text"
            value={comments}
            onChange={(e)=>setComments(e.target.value)}
            placeholder="Comments"
            />                
            <input
            className="form-input" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            />
            <button type="submit">Add model</button>
            {error && <p>{error}</p>}
        </form>
        </div>
    );
}

