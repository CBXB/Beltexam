import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Main = props => {
    const [pets, setPets] = useState([]);
    const fetchActivities = () =>{
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data))
            .catch(err =>console.log(err));
    }

    useEffect(()=>{
        fetchActivities();
    },[])

    return (
        <div className="columns" style={{padding:"40px"}}>
        <div className="column">
            <Link to="/new" className="subtitle"><button type="button" class="btn btn-primary">Add a pet to the Shelter!</button></Link>
            <div class="table-container">
                <table class="table table-hover">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pets.map(s =>
                        <tr class="table-info" key = {s._id}>
                            <td>{s.name}</td>
                            <td>{s.type}</td>
                            <td><Link to={"/info/"+s._id}>Details</Link>
                            &nbsp;|&nbsp;
                            <Link to={"/edit/"+s._id}>Edit</Link></td>
                        </tr>   
                            
                        )
                    }
                </table>
            </div>
        </div>
        
        </div>
    )
}

    export default Main;