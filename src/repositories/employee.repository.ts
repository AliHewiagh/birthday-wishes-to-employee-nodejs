import Employee from 'Models/employee.model';
import { Service } from 'typedi';
import Api from 'Networking/api';
const moment = require('moment');

@Service()
class EmployeeRepository {
    private employees: Employee[] = [];

    async getEmployees(
        excludedIdsParam: string,
        greetingDateParam: string
    ): Promise<Employee[]> {
        let today = moment().format('YYYY-MM-DD');

        this.employees = await Api.GET(
            `${process.env.EXTERNAL_API_BASE_URL}/employees?${greetingDateParam}${excludedIdsParam}&employmentStartDate_lte=${today}&employmentEndDate_glt=${today}`
        );

        return this.employees;
    }

    async getExcludedEmployees(): Promise<number[]> {
        const excludedEmployeesIds = await Api.GET(
            `${process.env.EXTERNAL_API_BASE_URL}/do-not-send-birthday-wishes`
        );

        return excludedEmployeesIds;
    }
}

export default EmployeeRepository;
