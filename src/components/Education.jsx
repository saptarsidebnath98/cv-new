import React, { useState } from 'react'

const initialStudies = [
    {   
        id: 1,
        course: "B.Tech",
        institute:"Academy Of Technology",
        university: "MAKAUT",
        passOutYear: "2021",
        department: "Electrical Engineering",
        marks: "8.05 DGPA"
    },
    {
      id: 2,
      course: "Higher Secondary Examination",
      institute:"Chakdaha Ramlal Academy",
      university: "WBCHSE",
      passOutYear: "2017",
      department: "Science",
      marks: "82.3%"
    },
    {
      id: 3,
      course: "Secondary Examination",
      institute:"Chakdaha Ramlal Academy",
      university: "WBBSE",
      passOutYear: "2015",
      department: "General",
      marks: "90%"
    }
];

const Education = () => {

  const [studies, setStudies] = useState(initialStudies);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e, id, field) => {
    const newStudies = studies.map((study) => {
      if(study.id === id){
        return {...study, [field]: e.target.value}; 
      }
        return study;
    });
    setStudies(newStudies);
  };
 
  const toggleEdit = () => {
    if(isEditing){
      console.log('saving data', studies);
    }
    setIsEditing(!isEditing);
  };

  const inputStyle = {
    backgroundColor: isEditing ? '#e0e0e0' : '#283739',
    cursor: isEditing ? 'text' : 'not-allowed',
    color: isEditing ? 'black' : '#a2c11c'
  };


  return (
    <>
      <form id="education">
      <h3>Educational Background: </h3>
      <div>
        {studies.map((item)=> {
            return(
                <div key={item.id} className='eduContent'>
                    <div>
                    <label htmlFor={`Course-${item.id}`}>Course:</label>
                    <input type="text" value={item.course} id={`Course-${item.id}`}
                    onChange={(e) => handleInputChange(e, item.id, 'course')} disabled={!isEditing} style={inputStyle}
                  />
                    </div>
                    <div>
                    <label htmlFor={`Institute-${item.id}`}>Institution:</label>
                    <input type="text" value={item.institute} id={`Institute-${item.id}`}
                    onChange={(e) => handleInputChange(e, item.id, 'institute')} disabled={!isEditing} style={inputStyle}/>
                    </div>
                    <div>
                    <label htmlFor={`University-${item.id}`}>University:</label>
                    <input type="text" value={item.university} id={`University-${item.id}`}
                    onChange={(e) => handleInputChange(e, item.id, 'university')} disabled={!isEditing} style={inputStyle}/>
                    </div>
                    <div>
                    <label htmlFor={`Passout-${item.id}`}>Passout Year:</label>
                    <input type="text" value={item.passOutYear} id={`Passout-${item.id}`}
                    onChange={(e) => handleInputChange(e, item.id, 'passOutYear')} disabled={!isEditing} style={inputStyle}/>
                    </div>
                    <div>
                    <label htmlFor={`Department-${item.id}`}>Department:</label>
                    <input type="text" value={item.department} id={`Department-${item.id}`}
                    onChange={(e) => handleInputChange(e, item.id, 'department')} disabled={!isEditing} style={inputStyle}/>
                    </div>
                    <div>
                    <label htmlFor={`Marks-${item.id}`}>Marks:</label>
                    <input type="text" value={item.marks} id={`Marks-${item.id}`}
                    onChange={(e) => handleInputChange(e, item.id, 'marks')} disabled={!isEditing} style={inputStyle}/>
                    </div>
                </div>
            )
        })}
        </div>
        <button type='button' onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </form>
    </>
  )
}

export default Education
