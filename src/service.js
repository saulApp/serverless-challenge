"use strict";
const AWS = require("aws-sdk");
const { responseMessage } = require("../util/helper")
const { v4 } = require("uuid");


/* 
Creación de método para crear notas 
*/
const createNote = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();
    const newNote = {
      id,
      title,
      description,
      complete: false,
      createdAt: createdAt.toISOString(),
    };
    await dynamodb
      .put({
        TableName: "Notes",
        Item: newNote,
      })
      .promise();

    return responseMessage(200, {
      message: "Se registró correctamente la nota.",
    });
  } catch (err) {
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
    return responseMessage(200, response.Items);
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
    return responseMessage(200, response.Item);
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
    const { complete, title, description } = JSON.parse(event.body);
    const note = await dynamodb
      .update({
        TableName: "Notes",
        Key: { id },
        UpdateExpression:
          "set complete = :complete, title = :title, description = :description",
        ExpressionAttributeValues: {
          ":complete": complete,
          ":title": title,
          ":description": description,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();
    return responseMessage(200, note.Attributes);
  } catch (error) {
    // retornamos mensaje de error si falla al realizar la petición
    return responseMessage(400, {
      message: "Ocurrió un error al actualizar la nota.",
    });
  }
};

/*
Creación de método que elimina una nota
*/
const deleteNote = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    await dynamodb
      .delete({
        TableName: "Notes",
        Key: {
          id,
        },
      })
      .promise();

    return responseMessage(200, {
      message: "Se eliminó correctamente la nota.",
    });
  } catch (error) {
    // retornamos mensaje de error si falla al realizar la petición
    return responseMessage(400, {
      message: "Ocurrió un error al eliminar la nota.",
    });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  deleteNote,
};
