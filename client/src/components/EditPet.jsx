import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditPet = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [like, setLike]  = useState(0);
    const [errors, setErrors] = useState({});

    const getPet = () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then( res => {
                console.log(res.data)
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                setLike(res.data.like);
            })
            .catch( err => console.log(err));
    }
    
    useEffect(()=>{
        getPet();
    },[]);

    const editPet = e => {
        e.preventDefault();
        const pet = {name,type,description,skill1,skill2,skill3,like};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, pet)
            .then(res =>{
                if(res.data.errors){
                    setErrors(res.data.errors);
                }
                else{
                    navigate("/");
                }
                console.log(res)})
            .catch(err => console.log(err));
    }

    return(
        <fieldset>
            <h1 className="title">Edit Pet</h1>
            <div className="message-header">
                <p>Update Pet Info</p>
            </div>
            <div class="row justify-content-center">
                <form class="col-md-2" onSubmit = { editPet }> 
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Name" onChange={e=> setName(e.target.value)} value={name}/>
                    {
                        errors.name ? <p class="help is-danger">{errors.name.message}</p> : true 
                    }

                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Type" onChange={e=> setType(e.target.value)} value={type} />
                    {
                        errors.type ? <p class="text-primary">{errors.type.message}</p> : true 
                    }
                        
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Description" onChange={e=> setDescription(e.target.value)} value={description} />
                    {
                        errors.description ? <p class="text-primary">{errors.description.message}</p> : true 
                    }
                        
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Skill 1" onChange={e=> setSkill1(e.target.value)} value={skill1} />
                        
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Skill 2" onChange={e=> setSkill2(e.target.value)} value={skill2} />
                        
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Enter Skill 3" onChange={e=> setSkill3(e.target.value)} value={skill3} />
                        
                    </div>
                    <button type="submit" style={{width:"100%"}} className="btn btn-success">Update!</button>
                </form>
            </div>
        </fieldset>
    )
}

export default EditPet;