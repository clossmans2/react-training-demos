import React from 'react';
import { useParams } from 'react-router-dom';
import { getStudentById } from '../services/studentService';

export function StudentDetails() {
    const [student, setStudent] = React.useState({
        id: '',
        firstMidName: '',
        lastName: '',
        email: '',
        enrollmentDate: ''
    });
    const { studentId } = useParams();

    React.useEffect(() => {
        if (!studentId) {
            return;
        }
        getStudentById(studentId).then(response => {
            setStudent(response.data)
        });
    }, [setStudent, studentId]);

    return (
        <div>
            <h2>Student Details</h2>
            <dl>
                <dt>ID</dt>
                <dd>{student.id}</dd>
                <dt>Full Name</dt>
                <dd>{student.firstMidName} {student.lastName}</dd>
                <dt>Email</dt>
                <dd>{student.email}</dd>
            </dl>
        </div>
    )
}