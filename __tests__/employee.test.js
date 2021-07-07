const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Creates employee object", () => {
        const newEmployee = new Employee();
        expect(typeof(newEmployee)).toBe("object");
    });

    it("Creates employee object with name, id and email properties", () => {
        const newEmployee = new Employee("Josh", "0", "test@test.com");

        expect(newEmployee.name).toEqual("Josh");
        expect(newEmployee.id).toEqual("0");
        expect(newEmployee.email).toEqual("test@test.com");
    })
});