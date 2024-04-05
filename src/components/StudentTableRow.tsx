import React from 'react';
import { Student } from '../types';

interface StudentTableRowProps {
    student: Student;
}

export function StudentTableRow({ student }: StudentTableRowProps): JSX.Element {
    let studentLink = `/students/${student.id}`;
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.fullName}</td>
            <td>{student.email}</td>
            <td><a className='btn btn-info' href={studentLink}>Details</a></td>
        </tr>
    );
}