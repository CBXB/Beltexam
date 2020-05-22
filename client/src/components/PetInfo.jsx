import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const PetInfo = props => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [like, setLike] = useState(0);

    const getPet = () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                setLike(res.data.like);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getPet();
    }, []);

    const remove = _id => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err));
    }

    const thumbup = e => {
        setLike(like + 1)
        const pet = { name, type, description, skill1, skill2, skill3, like };
        axios.put(`http://localhost:8000/api/pets/${props._id}`, pet)
            .then(res => {
                console.log(res.data);

            })
            .catch(err => console.log(err));
    }

    return (
        <fieldset>
            <h1 className="title">Deatils about: {name}</h1>
            <div className="message-body">
                <div style={{ display: "inline-block", verticalAlign: "top" }}>
                    <h6>Pet Type:</h6>
                    <h6>Descrption:</h6>
                    <h6>Skills:</h6>
                </div>
                <div style={{ display: "inline-block", paddingLeft: "40px" }}>
                    <h6 class="text-success">{type}</h6>
                    <h6 class="text-success">{description}</h6>
                    <div>
                        <h6 class="text-success">{skill1}</h6>
                        <h6 class="text-success">{skill2}</h6>
                        <h6 class="text-success">{skill3}</h6>
                    </div>
                </div>
                <div style={{ paddingTop: "20px" }}>
                    <button onClick={e => remove(props._id)} style={{ marginRight: "20px" }} className="btn btn-outline-success">Adopt {name}</button>
                    <button style={{ marginRight: "20px" }} onClick={e => thumbup()} className="btn btn-outline-success">Like {name}</button>
                    <h6 class="text-success" style={{ display: "inline-block", marginTop: "7px" }}>{like} like(s)</h6>
                </div>
            </div>
        </fieldset>

        
    )
}

export default PetInfo;