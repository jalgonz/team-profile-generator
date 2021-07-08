const Intern = require("../lib/intern");

describe("Intern", () => {
    it("Sets name, id, email, and school properties", () => {
        const e = new Intern("Josh", "0", "test@test.com", "TU");
        expect(e.school).toEqual("TU");
    });

    describe("getSchool", () => {
        it("Gets school", () => {
            const testValue = "TU";
            const e = new Intern("Josh", "0", "test@test.com", testValue);
            expect(e.getSchool()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("Gets role", () => {
            const testValue = "Intern";
            const e = new Intern("Josh", "0", "test@test.com", "TU");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});

