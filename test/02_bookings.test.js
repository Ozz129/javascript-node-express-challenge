const request = require("supertest");
const app = require("../app");
const { tokenSign } = require("../utils/handleJwt");
const booksModel = require("../models/bookings");
const usersModel = require("../models/users");

const {
  bookingRegister,
  testAuthRegister
} = require("./helper/helperData");
let JWT_TOKEN = "";

beforeAll(async () => {
  await booksModel.deleteMany({});
  const user = await usersModel.find({email: testAuthRegister.email});
  JWT_TOKEN = await tokenSign(user);

  console.log('------>', JWT_TOKEN);
});

test("deberia registra un item", async () => {
  const res = await request(app)
    .post("/api/bookings")
    .set("Authorization", `Bearer ${JWT_TOKEN}`)
    .send(bookingRegister);
  const { body } = res;
  expect(res.statusCode).toEqual(201);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.name");
  expect(body).toHaveProperty("data.email");
  expect(body).toHaveProperty("data.origin");
  expect(body).toHaveProperty("data.destination");
  expect(body).toHaveProperty("data.apertureDate");
  expect(body).toHaveProperty("data.duration");
  expect(body).toHaveProperty("data._id");
});

test("should create a return all", async () => {
  const res = await request(app)
    .get("/api/bookings")
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});

test("debe retornar todo el detalle del item", async () => {
  const { _id } = await booksModel.findOne({});
  id = _id.toString();
  const res = await request(app)
    .get(`/api/bookings/${id}`)
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
});

test("debe eliminar el item", async () => {
  const { _id } = await booksModel.findOne({});
  id = _id.toString();
  const res = await request(app)
    .delete(`/api/bookings/${id}`)
    .set("Authorization", `Bearer ${JWT_TOKEN}`);
  const { body } = res;
  expect(res.statusCode).toEqual(200);
  expect(body).toHaveProperty("data");
  expect(body).toHaveProperty("data.deleted", 1);
});
