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
            <h1>{s.firstName}</h1>
            <h5>Email:{s.email}</h5>
            <h5>Company{s.company}</h5>
            <h5>Skill:{s.skill}</h5>
            <h5>Grade:{eval(s.grades.join('+'))/s.grades.length}</h5>
            </div>
            )
            
        )
}


export default FetchApi;