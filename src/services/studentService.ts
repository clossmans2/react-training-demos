import axios from "axios";
import { Student, StudentDetailResponse } from "../types";

export const http = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-type': 'application/json',
    },
});

const getAllStudents = async () => {
    return await http.get<Array<Student>>('/student');
}

const getStudentById = async (id: string) => {
    return await http.get<StudentDetailResponse>(`/student/${id}`);
};

export { getAllStudents, getStudentById };
