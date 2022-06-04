const personaje = ({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created,
    edited,
    url,
  }) => {
  return {
      nombre : name,
      altura : height,
      masa : mass,
      color_pelo : hair_color,
      color_piel : skin_color,
      color_ojos : eye_color,
      año_nacimiento : birth_year,
      genero : gender,
      mundo_natal : homeworld,
      peliculas : films,
      especies : species,
      vehiculos : vehicles,
      naves : starships,
      creado : created,
      editado : edited,
      url : url,
  }
}

module.exports = {
    personaje
}