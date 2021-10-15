import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import './Card.css'

const FetchApi=()=>{


    const [Data,setData]=React.useState([])



    useEffect(() => {
        axios.get('https://api.hatchways.io/assessment/students')
        .then(response=>{setData(response.data.students)
           })
    }, [])



        return(
            Data.map(s=>
            <div className="box"> 
             <img src={s.pic} />
             <div className="right-box">
            <h1>{s.firstName}</h1>
            <ul>
            <li>Email:{s.email}</li>
            <li>Company{s.company}</li>
            <li>Skill:{s.skill}</li>
            <li>Grade:{eval(s.grades.join('+'))/s.grades.length}</li>
            </ul>
            <br></br>
            </div>
            </div>
            )
            
        )
}


export default FetchApi;