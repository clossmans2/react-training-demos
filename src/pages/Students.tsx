import React from 'react';
import { Footer, Header, StudentTableRow } from '../components';
import { getAllStudents } from '../services/studentService'
import { Student } from '../types'

export function Students() {
    const [students, setStudents] = React.useState(new Array<Student>());

    let newStudent = { id: "", fullName: "", email: "" }

    React.useEffect(() => {
        getAllStudents().then(response => {
            setStudents(response.data)
        });
    }, [setStudents]);

    return (
        <>
        <Header />
        <div className="container">
            <h2>Students</h2>
            <table className='table table-responive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {students.map((student) => (<StudentTableRow key={student.id} student={student} />))}
                </tbody>
            </table>
        </div>
        <Footer />
        </>
    )
}