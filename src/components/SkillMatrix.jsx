
import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';

const getColor = (level) => {
  if (level <= 2) return 'bg-danger text-white';
  if (level === 3) return 'bg-warning';
  return 'bg-success text-white';
};

function SkillMatrixTable({ data, teamMembers }) {
  const [filter, setFilter] = useState('');

  const filteredData = data.filter(row =>
    row.skill.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Filter by skill..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-3"
      />
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Skill</th>
            {teamMembers.map(member => (
              <th key={member}>{member}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.skill}</td>
              {teamMembers.map(member => (
                <td key={member} className={getColor(row[member])}>{row[member]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SkillMatrixTable;