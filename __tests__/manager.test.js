const Manager = require("../lib/manager");

describe("Manager", () => {
    it("Sets name, id, email, and officeNumber properties", () => {
        const e = new Manager("Josh", "0", "test@test.com", "1234");
        expect(e.officeNumber).toEqual("1234");
    });

    describe("getOfficeNumber", () => {
        it("Gets office number", () => {
            const testValue = "1234";
            const e = new Manager("Josh", "0", "test@test.com", testValue);
            expect(e.getOfficeNumber()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("Gets role", () => {
            const testValue = "Manager";
            const e = new Manager("Josh", "0", "test@test.com", "1234");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});