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
    //const[birthDate, setBirthDate]=useState('');
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');

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
        const dateTime =`${birthDate}T${birthTime}:00.000Z`; // Adding default seconds and milliseconds
        try {
            console.log({firstName, lastName, email, phoneNo,addresLine1,addresLine2,zip,city,country,birthDate:dateTime,nationality,height,shoeSize,hairColor,eyeColor,comments, password });
            const response = await axios.post('https://localhost:7181/api/Models', {firstName, lastName, email, phoneNo,addresLine1,addresLine2,zip,city,country,birthDate:dateTime,nationality,height,shoeSize,hairColor,eyeColor,comments, password });
            localStorage.setItem('token', response.data.token);
            console.log("Model added")
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('Submit fejlede. Tjek at du har udfyldt alle de påkrævede felter.');
        }
    };
    return (
        <div>
            <h2>Add a new model</h2>
            <h3>Enter model-information in the following text-boxes:</h3>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="First Name"
            required
            />
            <input
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Last Name"
            required
            />
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            />
            <input
            type="tel"
            value={phoneNo}
            onChange={(e)=>setPhoneNo(e.target.value)}
            placeholder="Phone No"
            required
            />
            <input
            type="text"
            value={addresLine1}
            onChange={(e)=>setAddresLine1(e.target.value)}
            placeholder="Addres Line 1"
            required
            />
            <input
            type="text"
            value={addresLine2}
            onChange={(e)=>setAddresLine2(e.target.value)}
            placeholder="Addres Line 2"
            />
            <input
            type="text"
            value={zip}
            onChange={(e)=>setZip(e.target.value)}
            placeholder="Zip code"
            required
            />
            <input
            type="text"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            placeholder="City"
            required
            />
            <input
            type="text"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
            placeholder="Country"
            required
            />
           <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
            />
            <input
                type="time"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                required
            />
            <input
            type="text"
            value={nationality}
            onChange={(e)=>setNationality(e.target.value)}
            placeholder="Nationality"
            required
            />
            <input
            type="number"
            value={height}
            onChange={(e)=>setHeight(e.target.value)}
            placeholder="Height"
            required
            />
            <input
            type="number"
            value={shoeSize}
            onChange={(e)=>setShoeSize(e.target.value)}
            placeholder="Show Size"
            required
            />
            <input
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

