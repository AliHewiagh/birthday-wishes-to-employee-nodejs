import Employee from 'Models/employee.model';
import EmployeeRepository from 'repositories/employee.repository';
import { Service } from 'typedi';
const moment = require('moment');

@Service()
class EmployeeService {
    constructor(private readonly employeeRepository: EmployeeRepository) {}
    async getEmployees(
        excludedIdsParam: string,
        greetingDateParam: string
    ): Promise<Employee[]> {
        const employees = await this.employeeRepository.getEmployees(
            excludedIdsParam,
            greetingDateParam
        );

        return employees.filter((employee) =>
            this.didReceivedWishToday(employee)
        );
    }

    didReceivedWishToday(employee: Employee) {
        // To implement - remove employees who already received wishes today
        return true;
    }

    /* Get IDs of those not supposed to
     * receive the wishes
     */
    async getExcludedEmployeesIds(): Promise<number[]> {
        const excludedEmployeesIds =
            await this.employeeRepository.getExcludedEmployees();

        return excludedEmployeesIds;
    }

    /* A custom parameter to excluded specific employees to be
     * used in the retrieving employees list
     */
    generateExcludedEmployeeParam(excludedEmployee: Array<number>): string {
        let excludedIdsParam = '';
        excludedEmployee.forEach((element) => {
            excludedIdsParam = `${excludedIdsParam}&id_ne=${element}`;
        });
        return excludedIdsParam;
    }

    /* Generate a custom paramter of a specific parameter
     * and set current date to it.
     * Ex: Parameter: dateOfBirth=todayDate
     */
    generateGreetingDateParam(greetingParameter: string): string {
        let greetingDateParam = greetingParameter;

        const today = moment('2009-02-15T00:00:00');
        // const today = moment();

        let month = ('0' + (today.month() + 1)).slice(-2);
        let day = ('0' + today.date()).slice(-2);

        greetingDateParam = `${greetingDateParam}${month}-${day}`;

        if (
            this.isLeapYear(today.year()) ||
            !(today.month() + 1 === 2 && today.date() == 28)
        ) {
            return greetingDateParam;
        }

        /* in case not leap year, include those with date of
         * birth 02-29 with 02-28 batch
         */
        return `${greetingDateParam}&${greetingParameter}02-29`;
    }

    private isLeapYear(year: number): Boolean {
        return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    }
}

export default EmployeeService;
