import app from "../src/index.js";
import request from "supertest";
 
test("test-express", async () => {
  const res = await request(app).get("/");
  expect(res.body).toStrictEqual({ data: "hello world" });
});
