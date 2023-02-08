export interface Post {
    id: number;
    message: string;
    imageId: number;
    author: {
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        date: string;
    };
    postType: string;
    rating: Rating;
    createdDate: string;
    }

export interface Rating {
        id: number;
        employee: {
            id: number;
            firstName: string;
            lastName: string;
                author: {
                    id: number;
                    email: string;
                    password: string;
                    firstName: string;
                    lastName: string;
                    date: string;
                };
            department: {
                id: number;
                title: string;
            };
            createdDate: string;
            };
        score: number;
        tag1: {
            id: number;
            tagName: string;
        };
        tag2: {
            id: number;
            tagName: string;
        };
        tag3: {
            id: number;
            tagName: string;
        };
    };