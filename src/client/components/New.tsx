import * as React from 'react';
import {useEffect,useState} from 'react'
import { RouteComponentProps } from "react-router";


export const Add:React.FC<AddProps> = (props:AddProps)=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [location,setLocation]=useState('')
    // const [message,setMessage]=useState('')

    const getUsers = async () => {
        try {
          let res = await fetch(`api/users`);
          let data = await res.json();
          console.log(data)
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        getUsers();
      }, []);

      const handleClickUsers = async ()=>{
        
            await fetch(`api/users`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:name,email:email,password:password})
  
            })
        
      }
      

    

    return(
       <form className="form-group">
           <label htmlFor="name">Create UserName:</label>
           <input onChange={e=>{setName(e.target.value)}} type="text" className='form-control'/>
           <label htmlFor="email">Enter Email:</label>
           <input onChange={e=>{setEmail(e.target.value)}} type="text" className='form-control'/>
           <label htmlFor="password">Create Password:</label>
           <input onChange={e=>{setPassword(e.target.value)}} type="text" className='form-control'/> 
           <button onClick={handleClickUsers}>Create First Chirp</button>
       </form>
    )
}

interface AddProps {}

export default Add;