import GreetingType from 'Enums/greeting.type';
import { Request, Response } from 'express';
import EmployeeService from 'Services/employee.service';
import GreetingsService from 'Services/greeting.service';
import { Service } from 'typedi';

@Service()
class GreetingsController {
    constructor(
        private readonly greetingsService: GreetingsService,
        private readonly employeeService: EmployeeService
    ) {}

    public async greetings(_req: Request, res: Response) {
        try {
            const excludedEmployeesIds =
                await this.employeeService.getExcludedEmployeesIds();

            const excludedIdsParam =
                await this.employeeService.generateExcludedEmployeeParam(
                    excludedEmployeesIds
                );

            const greetingDateParam =
                await this.employeeService.generateGreetingDateParam(
                    'dateOfBirth_like='
                );

            const employees = await this.employeeService.getEmployees(
                excludedIdsParam,
                greetingDateParam
            );

            if (employees.length < 1) {
                return res.json('No employee found!');
            }

            let resp = await this.greetingsService.sendGreetingEmail(
                employees,
                GreetingType.BIRTHDAY
            );

            return res.json(resp);
        } catch (error) {
            if (error) {
                return res.json(error.message);
            }
        }
    }
}

export default GreetingsController;
