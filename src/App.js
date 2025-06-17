import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillMatrixTable from './components/SkillMatrix';
import SkillBarChart from './components/SkillsBarChart';
import skillsData from './data/SkillData';

function App() {
  const teamMembers = ['Alice', 'Bob', 'Charlie'];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Skill Matrix Dashboard</h2>
      <SkillMatrixTable data={skillsData} teamMembers={teamMembers} />
      <hr className="my-5" />
      <SkillBarChart data={skillsData} teamMembers={teamMembers} />
    </div>
  );
}

export default App;