interface Author {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    date: string;
}

interface Department {
    id: number;
    title: string;
}

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    author: Author;
    department: Department;
    createdDate: string;
}