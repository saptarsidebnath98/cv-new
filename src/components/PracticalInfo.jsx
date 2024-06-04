import React, { useState } from 'react';
import './style.css';

const initialIndustry = [
  {
    id: 1,
    companyName: "Cognizant",
    role: "Programmer Analyst",
    from: "01/11/2022",
    to: "04/12/2024",
    project: [{
      name: "Alaska Airlines - web flight tracking system",
      from: "09/11/2022",
      to: "04/12/2024",
      workSummery: "Built reusable React components and implemented advanced state management using Redux, enhancing application stability and user experience. Collaborated closely with UX/UI designers to convert designs into functional user interfaces using CSS and Material-UI."
    }]
  }
];

const PracticalInfo = () => {
  const [industry, setIndustry] = useState(initialIndustry);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e, id, field, projectId, projectField) => {
    const newIndustry = industry.map((item) => {
      if (item.id === id) {
        if (projectId !== undefined) {
          const newProject = item.project.map((proj, index) => {
            if (index === projectId) {
              return { ...proj, [projectField]: e.target.value };
            }
            return proj;
          });
          return { ...item, project: newProject };
        }
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setIndustry(newIndustry);
  };

  const toggleEdit = () => {
    if (isEditing) {
      console.log('Saving data:', industry);
    }
    setIsEditing(!isEditing);
  };

  const inputStyle = {
    backgroundColor: isEditing ? '#e0e0e0' : '#283739',
    cursor: isEditing ? 'text' : 'not-allowed',
    color: isEditing ? 'black' : '#a2c11c'
  };

  const textAreaStyle = {
    ...inputStyle,
    height: '40%',
    width: '60%'
  };

  return (
    <>
      <form id='practicalInfo'>
        <h3>Practical Knowledge:</h3>
        {industry.map((item, index) => (
          <div key={item.id} className="practicalContent">
            <label htmlFor={`companyName-${item.id}`}>Company Name:</label>
            <input
              type="text"
              value={item.companyName}
              id={`companyName-${item.id}`}
              onChange={(e) => handleInputChange(e, item.id, 'companyName')}
              disabled={!isEditing}
              style={inputStyle}
            />
            <label htmlFor={`role-${item.id}`}>Role:</label>
            <input
              type="text"
              value={item.role}
              id={`role-${item.id}`}
              onChange={(e) => handleInputChange(e, item.id, 'role')}
              disabled={!isEditing}
              style={inputStyle}
            />
            <label htmlFor={`timeline-${item.id}`}>Timeline:</label>
            <input
              type="text"
              value={`${item.from} to ${item.to}`}
              id={`timeline-${item.id}`}
              disabled={!isEditing}
              style={inputStyle}
            />
            <label style={{color : "#3baea0"}}>Project:</label>
            {item.project.map((pro, projectIndex) => (
              <div key={projectIndex}>
                <label htmlFor={`projectName-${item.id}-${projectIndex}`}>Name:</label>
                <input
                  type="text"
                  value={pro.name}
                  id={`projectName-${item.id}-${projectIndex}`}
                  onChange={(e) => handleInputChange(e, item.id, 'project', projectIndex, 'name')}
                  disabled={!isEditing}
                  style={inputStyle}
                />
                <label htmlFor={`projectTimeline-${item.id}-${projectIndex}`}>Timeline:</label>
                <input
                  type="text"
                  value={`${pro.from} to ${pro.to}`}
                  id={`projectTimeline-${item.id}-${projectIndex}`}
                  disabled={!isEditing}
                  style={inputStyle}
                />
                <div className="workSummeryDiv">
                <label htmlFor={`workSummery-${item.id}-${projectIndex}`}>Work Summary:</label>
                <textarea
                  type="text"
                  value={pro.workSummery}
                  id={`workSummery-${item.id}-${projectIndex}`}
                  onChange={(e) => handleInputChange(e, item.id, 'project', projectIndex, 'workSummery')}
                  disabled={!isEditing}
                  style={textAreaStyle}
                 />
                 </div>
              </div>
            ))}
          </div>
        ))}
        <button type='button' onClick={toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </form>
    </>
  );
};

export default PracticalInfo;
