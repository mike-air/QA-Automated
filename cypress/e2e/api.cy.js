describe("Simulate Login API", () => {
  const API_URL = "https://reqres.in/api";

  it("should make a successful login request", () => {
    cy.request({
      method: "POST",
      url: `${API_URL}/login`,
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq("OK");
      expect(response.body).to.have.property("token");
    });
  });
    
  it("should validate an invalid login request", () => {
    cy.request({
      method: "POST",
      url: `${API_URL}/login`,
      failOnStatusCode: false, // Allow the request to return a 400 status without failing the test
      body: {
        email: "eve.holt@reqres.in", // Missing password
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.statusText).to.eq("Bad Request");
      expect(response.body).to.have.property("error", "Missing password");
    });
  });
});
