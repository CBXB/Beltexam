import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [like, setLike]  = useState(0);
    const [errors, setErrors] = useState({});

    const addPet = e => {
        e.preventDefault();
        const Pet = {name,type,description,skill1,skill2,skill3,like};
        axios.post("http://localhost:8000/api/pets", Pet)
            .then(res =>{
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate("/");
                }
                console.log(res)})
            .catch( err => console.log(err));
    }

    return(
        <fieldset>
            <h1>Know a pet needing a home?</h1>
            <div className="message-header">
            </div>
            <div class="row justify-content-center">
                <form class="col-md-2" onSubmit = { addPet }> 
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" onChange={e=> setName(e.target.value)}/>
                    {
                        errors.name ? <p class="text-primary">{errors.name.message}</p> : true 
                    }
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Type" onChange={e=> setType(e.target.value)}/>
                    {
                        errors.type ? <p class="text-primary">{errors.type.message}</p> : true 
                    }
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Description" onChange={e=> setDescription(e.target.value)}/>
                    {
                        errors.description ? <p class="text-primary">{errors.description.message}</p> : true 
                    }
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Skill 1" onChange={e=> setSkill1(e.target.value)}/>

                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Skill 2" onChange={e=> setSkill2(e.target.value)}/>
                        
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Skill 3" onChange={e=> setSkill3(e.target.value)}/>
                        
                    </div>
                    <button type="submit" style={{width:"100%"}} className="btn btn-success">Add Pet</button>
                </form>
            </div>
        </fieldset>
    )
}

export default NewPet;