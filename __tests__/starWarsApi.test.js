"use strict";
const mod = require("../src/swapi");

const jestPlugin = require("serverless-jest-plugin");
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: "getPeople" });
describe("getPeople", () => {
  test("getPeople", () => {
    const params = {
      pathParameters: {
        id: 1,
      },
    };
    return wrapped.runHandler(params).then((response) => {
      const test = {
        nombre: "Luke Skywalker",
        altura: "172",
        masa: "77",
        color_pelo: "blond",
        color_piel: "fair",
        color_ojos: "blue",
        año_nacimiento: "19BBY",
        genero: "male",
        mundo_natal: "https://swapi.py4e.com/api/planets/1/",
        peliculas: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/6/",
          "https://swapi.py4e.com/api/films/7/",
        ],
        especies: ["https://swapi.py4e.com/api/species/1/"],
        vehiculos: [
          "https://swapi.py4e.com/api/vehicles/14/",
          "https://swapi.py4e.com/api/vehicles/30/",
        ],
        naves: [
          "https://swapi.py4e.com/api/starships/12/",
          "https://swapi.py4e.com/api/starships/22/",
        ],
        creado: "2014-12-09T13:50:51.644000Z",
        editado: "2014-12-20T21:17:56.891000Z",
        url: "https://swapi.py4e.com/api/people/1/",
      };
      expect(response.statusCode).toEqual(200);
      expect(JSON.parse(response.body)).toMatchObject(test);
    });
  });
});
