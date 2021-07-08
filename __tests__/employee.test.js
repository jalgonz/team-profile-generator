const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Creates employee object", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Sets name, id and email properties", () => {
        const e = new Employee("Josh", "0", "test@test.com");

        expect(e.name).toEqual("Josh");
        expect(e.id).toEqual("0");
        expect(e.email).toEqual("test@test.com");
    });

    describe("getName", () => {
        it("Gets name", () => {
            const testValue = "Josh"
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });

    describe("getId", () => {
        it("Gets id", () => {
            const testValue = "0"
            const e = new Employee("Josh", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });

    describe("getEmail", () => {
        it("Gets email", () => {
            const testValue = "test@test.com"
            const e = new Employee("Josh", "0", testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("Gets name", () => {
            const testValue = "Employee"
            const e = new Employee("Josh", "0", "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});