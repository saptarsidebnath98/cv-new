import React, { useState } from 'react';
import './style.css';

const info = [
    {
        field: 'Name',
        id: 'name',
        value: "Saptarsi Debnath",
        type: 'text',
        placeholder: null
    },
    {
        field: 'Email',
        id: 'email',
        value: "debsapt211@gmail.com",
        type: 'text',
        placeholder: 'xyz@gmail.com'
    },
    {
        field: 'Phone Number',
        id: 'phnNumber',
        value: "+91 8918221707",
        type: 'text',
        placeholder: null,
    },
    {
        field: 'Address',
        id: 'address',
        value: "A 6/65 Kshudiram Pally, P.O- Chakdaha, Dist: Nadia, Pin: 741222, West Bengal, India",
        type: 'text',
        placeholder: null,
    }
]

const GeneralInfo = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState(
        info.reduce((acc, item) => ({...acc, [item.id]: item.value}),{})
    )
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
          ...formData,
          [id]: value
        });
      };

    const handelEditClick = () => {
        if(isEdit){
            console.log('Form submitted: ', formData);
        }
        setIsEdit(!isEdit);
    }
  return (
    <>
    <form id="generalInfo">
        <h3>Genral Information:</h3>
        {info.map((item) => {
            return(
            <div key={item.id}>
            <label htmlFor={item.id} >{item.field}: </label>
            <input
             type={item.type}
              id={item.id} 
              placeholder={item.placeholder}
            value={formData[item.id]}
            onChange={handleInputChange}
            disabled={!isEdit}
            style={{
                backgroundColor: isEdit ? '#e0e0e0' : '#283739',
                cursor: isEdit ? 'text' : 'not-allowed',
                color: isEdit ? 'black' : '#a2c11c'
            }}/>
            </div>
            )
        }
        )}
        <button type='button' onClick={handelEditClick}> {isEdit ? 'Save' : 'Edit'}</button>
      </form>
    </>
  )
}

export default GeneralInfo