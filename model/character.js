const Character = class {
  constructor({
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
  }) {
    this.nombre = name;
    this.altura = height;
    this.masa = mass;
    this.color_pelo = hair_color;
    this.color_piel = skin_color;
    this.color_ojos = eye_color;
    this.año_nacimiento = birth_year;
    this.genero = gender;
    this.mundo_natal = homeworld;
    this.peliculas = films;
    this.especies = species;
    this.vehiculos = vehicles;
    this.naves = starships;
    this.creado = created;
    this.editado = edited;
    this.url = url;
  }

  getCharacter() {
    return this;
  }
};

module.exports = Character;
