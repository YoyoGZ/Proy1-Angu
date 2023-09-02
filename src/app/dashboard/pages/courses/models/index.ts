export interface Course {
    id: number;
    name: string;
    description: string;
    iniDate: string;
    finalDate: string;
};
export interface CreateCourseId {
    name: string,
    description: string;
    iniDate: string;
    finalDate: string;
};

export interface UpdateCourseData {
    name?: string,
    description?: string;
    iniDate?: string;
    finaDate?: string;
};
