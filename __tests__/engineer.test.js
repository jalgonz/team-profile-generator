const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("Sets name, id, email, and gitHub properties", () => {
        const e = new Engineer("Josh", "0", "test@test.com", "jalgonz");
        expect(e.gitHub).toEqual("jalgonz");
    });

    describe("getGitHub", () => {
        it("Gets GitHub", () => {
            const testValue = "jalgonz";
            const e = new Engineer("Josh", "0", "test@test.com", testValue);
            expect(e.getGitHub()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("Gets role", () => {
            const testValue = "Engineer";
            const e = new Engineer("Josh", "0", "test@test.com", "jalgonz");
            expect(e.getRole()).toBe(testValue);
        });
    });

});