import superagent from "superagent";

let response: any;
const baseUrl = "https://reqres.in/api";

const credentials: { email: string; password: string; token: string } = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    token: "QpwL5tke4Pnpja7X4"
};

const expectedUser: { name: string, job: string } = {
    name: "Katherine",
    job: "QA engineer"
};

describe("Test HTTP methods", () => {
    describe("Test GET-method to get users list", () => {
        test("Should correctly get users list", async () => {
            try {
                response = await superagent.get(`${baseUrl}/users`);
            } catch (err: any) {
                throw new Error (err.message);
            }

            expect(response.statusCode).toBe(200);
            expect(response.body.data.length).toBe(6);
        });
            
        test("Should correctly read GET request with queries", async () => {
            try {
                response = await superagent.get(`${baseUrl}/users`).query({page: 2});
            } catch (err: any) {
                throw new Error (err.message);
            }

            expect(response.statusCode).toBe(200);
            expect(response.body.data.length).toBe(6);
        });
    });

    describe("Test GET-method to get single user", () => {
        test("Should correctly get single user", async () => {
            try {
                response = await superagent.get(`${baseUrl}/user/2`);
            } catch (err: any) {
                throw new Error (err.message);
            }

            expect(response.statusCode).toBe(200);
            expect(response.body.data.id).toBe(2);
        });

        test("Should correctly handle non-existing user", async () => {
            try {
                response = await superagent.get(`${baseUrl}/user/23`);
            } catch (err: any) {
                expect(err.status).toBe(404);
            }
        }); 
    });

    describe("Test POST-method for authorization", () => {
        test("Should successfully login", async () => {
            try {
                response = await superagent
                .post(`${baseUrl}/login`)
                .set("Content-Type", "application/json")
                .send({ email: credentials.email, password: credentials.password });
            } catch (err: any) {
                throw new Error (err.message);
            }

            expect(response.statusCode).toBe(200);
            expect(response.body.token).toStrictEqual(credentials.token);
        });

        test("Should correctly handle authorization without password", async () => {
            try {
                response = await superagent
                .post(`${baseUrl}/login`)
                .set("Content-Type", "application/json")
                .send({ email: credentials.email});
            } catch (err: any) {
                expect(err.status).toBe(400);
                expect(JSON.parse(err.response.text)).toStrictEqual({ error: "Missing password" });
            }
        });

        test("Should correctly handle authorization without email", async () => {
            try {
                response = await superagent
                .post(`${baseUrl}/login`)
                .set("Content-Type", "application/json")
                .send({ password: credentials.password });
            } catch (err: any) {
                expect(err.status).toBe(400);
                expect(JSON.parse(err.response.text)).toStrictEqual({ error: "Missing email or username" });
            }
        });

        test("Should correctly handle authorization with invalid email", async () => {
            try {
                response = await superagent
                .post(`${baseUrl}/login`)
                .set("Content-Type", "application/json")
                .send({ email: `123${credentials.email}`, password: credentials.password });
            } catch (err: any) {
                expect(err.status).toBe(400);
                expect(JSON.parse(err.response.text)).toStrictEqual({ error: "user not found" });
            }
        });
    });

    describe("Test PUT-method to update user info", () => {
        test("Should correctly update user info", async () => {
            try {
                response = await superagent
                .put(`${baseUrl}/users/2`)
                .set("Content-Type", "application/json")
                .send({ name: expectedUser.name, job: expectedUser.job });
            } catch (err: any) {
                throw new Error (err.message);
            }
            
            expect(response.statusCode).toBe(200);
            expect(response.body.name).toStrictEqual(expectedUser.name);
            expect(response.body.job).toStrictEqual(expectedUser.job);
        });
    });

    describe("Test PATCH-method to update user info", () => {
        test("Should correctly update user info", async () => {
            try {
                response = await superagent
                .patch(`${baseUrl}/users/2`)
                .set("Content-Type", "application/json")
                .send({ name: expectedUser.name });
            } catch (err: any) {
                throw new Error (err.message);
            }
            
            expect(response.statusCode).toBe(200);
            expect(response.body.name).toStrictEqual(expectedUser.name);
        });
    });

    describe("Test DELETE-method to delete user", () => {
        test("Should correctly delete user", async () => {
            try {
                response = await superagent.delete(`${baseUrl}/users/2`);
            } catch (err: any) {
                throw new Error (err.message);
            }
            
            expect(response.statusCode).toBe(204);
        });
    });
});
