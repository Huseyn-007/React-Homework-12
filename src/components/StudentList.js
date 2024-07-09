import React, { useState } from "react";
import { deleteStudent } from "../services/api";
import '../App.css'

export default function StudentList({
  students,
  setCurrentStudent,
  fetchStudents,
}) {

const handleDelete= async (id)=>{
    await deleteStudent(id);
    fetchStudents();
}
const [selectedId , setSelectedId] = useState(null)

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id} id={student.id} className={selectedId == student.id ? 'select' : 'non-select'}>
          {student.name} {student.surname} (Age:{student.age},Score:
          {student.score})
          <button onClick={() => {
            setCurrentStudent(student);
            setSelectedId(student.id);
          } 
            
          }>Edit</button>
          <button onClick={() => handleDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}