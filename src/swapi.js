"use strict";
const axios = require("axios");
const Films = require("../model/films");
const Character = require("../model/character")
const { responseMessage } = require("../util/helper");

/* 
Métodos para listar personajes
*/
const getPeople = async (event) => {
  try {
    // Destructuramos el objeto pathParameters para obtener su id
    const { id } = event.pathParameters;
    // Enviamos el queryParam para que el API nos devuelva la respuesta en JSON
    const params = {
      format: "json",
    };
    // Utilizamos axios para realizar una petición get
    const response = await axios.get(`${process.env.API_URL}/people/${id}`, {
      params,
    });
    const personaje = new Character(response.data);
    // retornamos success si encuentra al personaje
    return responseMessage(200, personaje.getCharacter());
  } catch (err) {
    // retornamos mensaje de error si falla al realizar la petición
    return responseMessage(400, {
      message: "Ocurrió un error al realizar la busqueda del personaje.",
    });
  }
};

/* 
Métodos para listar peliculas
*/
const getFilm = async (event) => {
  try {
    const { id } = event.pathParameters;
    const params = {
      format: "json",
    };
    const response = await axios.get(`${process.env.API_URL}/films/${id}`, {
      params,
    });
    const pelicula = new Films(response.data);
    return responseMessage(200, pelicula.getFilm());
  } catch (err) {
    return responseMessage(400, {
      message: "Ocurrió un error al realizar la busqueda del personaje.",
    });
  }
};

module.exports = {
  getPeople,
  getFilm,
};
