class Employee {
    id: number;
    name: string;
    lastname: string;
    dateOfBirth: string;
    employmentStartDate: string;
    employmentEndDate?: string;
    lastNotification?: string;

    constructor(
        id: number,
        name: string,
        lastname: string,
        dateOfBirth: string,
        employmentStartDate: string,
        employmentEndDate: string,
        lastNotification: string
    ) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.dateOfBirth = dateOfBirth;
        this.employmentStartDate = employmentStartDate;
        this.employmentEndDate = employmentEndDate;
        this.lastNotification = lastNotification;
    }
}

export default Employee;
