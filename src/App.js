import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [mybio, setmybio] = useState('');
  const [role, setRole] = useState('Manager');
  const [formdata, setformdata] = useState({name:"",email:"",grade:"",school:"",age:"",city:"",bio:""});

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setformdata((prev)=> ({ ...prev, [name]: value}));
  }
    
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formdata);
    }
    
  return (
    <div>
      <br/>
      <form onSubmit={handleSubmit} style={{backgroundColor: 'lightBlue', borderRadius:15, height:500, width:400}}>

        <legend style={{borderColor: 'black', borderWidth: 10}}>Hello</legend>
        <label>Enter your Name</label>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/><br/>

        <label>Enter your Idea</label><br/>
        <textarea value={mybio} onChange={(e)=>setmybio(e.target.value)} placeholder="Enter your idea" /> <br/>

        <label>Enter your Course</label><br/>
        <select value={role} onChange={(e)=>setInputValue(e.target.value)}>
          <option value='Developer'>Developer</option>
          <option value='Designer'>Designer</option>
          <option value='Manager'>Manager</option>
        </select>
        
      
      <p>Value:{inputValue}</p>
      <p>My Bio:{mybio}</p>
      <p>Role:{role}</p>
       </form>
       <h2 style={{color: 'blue', fontSize: 30}}>Welcome to the Css section</h2>
       <form onSubmit={handleSubmit} style={{backgroundColor: '#0546727c', borderRadius:15, height:500, width:400}}>
        <label>Enter your Name</label><br/>
        <input type='text' value={formdata.name} onChange={(e)=>setformdata(e.target.value)}/><br/>
        <label>Enter your E-mail</label><br/>
        <input type='text' value={formdata.email} onChange={(e)=>setformdata(e.target.value)}/><br/>
       
        <label>Enter your Grade</label><br/>
        <input type='text' value={formdata.grade} onChange={handleChange}/><br/>
        <label>Enter your School</label><br/>
        <input type='text' value={formdata.School} onChange={handleChange}/><br/>
        <label>Enter your Age</label><br/>
        <input type='text' value={formdata.age} onChange={handleChange}/><br/>
        <label>Enter your City</label><br/>
        <input type='text' value={formdata.city} onChange={handleChange}/><br/>
        <label>Enter your Bio</label><br/>
        <input type='text' value={formdata.bio} onChange={handleChange}/><br/>
         </form> 
    </div>
  );
}

export default App;
