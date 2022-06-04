"use strict";
const axios = require("axios");
const AWS = require("aws-sdk");
const { personaje } = require("../model/personaje");
const { v4 } = require("uuid");

// Método para consumir SWAPI
const starWarsApi = async (event) => {
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
    // retornamos success si encuentra al personaje
    return responseMessage(200, personaje(response.data));
  } catch (err) {
    // retornamos mensaje de error si falla al realizar la petición
    console.log(err);
    return responseMessage(400, {
      message: "Ocurrió un error al realizar la busqueda del personaje.",
    });
  }
};

/* 
Creación de método para crear notas 
*/
const createNote = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();
    console.log("created id: ", id);
    const newNote = {
      id,
      title,
      description,
      done: false,
      createdAt,
    };
    await dynamodb
      .put({
        TableName: "Notes",
        Item: newNote,
      })
      .promise();

    return responseMessage(200, newNote);
  } catch (err) {
    console.log(err);
    // retornamos mensaje de error si falla al realizar la petición
    return responseMessage(400, {
      message: "Ocurrió un error al crear la nota.",
    });
  }
};

/* 
Creación de método para listar notas 
*/

const getAllNotes = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const response = await dynamodb
      .scan({
        TableName: "Notes",
      })
      .promise();
    return responseMessage(200, response);
  } catch (error) {
    // retornamos mensaje de error si falla al realizar la petición
    return responseMessage(400, {
      message: "Ocurrió un error al listar las notas.",
    });
  }
};

/*
Creación de método que devuelve una nota
*/
const getNote = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const response = await dynamodb
      .get({
        TableName: "Notes",
        Key: {
          id,
        },
      })
      .promise();
    const note = response.Item;
    return responseMessage(200, note);
  } catch (error) {
    // retornamos mensaje de error si falla al realizar la petición
    return responseMessage(400, {
      message: "Ocurrió un error al obtener la nota.",
    });
  }
};

/*
Creación de método que actualiza una nota
*/
const updateNote = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { done, title, description } = JSON.parse(event.body);
    const note = await dynamodb.update({
      TableName: "Notes",
      Key: { id },
      UpdateExpression: "set done = :done, title = :title, description = :description",
      ExpressionAttributeValues: {
        ":done": done,
        ":title": title,
        ":description": description,
      },
    });
    return note;
  } catch (error) {}
};
const responseMessage = (statusCode, data) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(data),
  };
};
module.exports = {
  starWarsApi,
  createNote,
  getAllNotes,
  getNote,
  updateNote,
};
