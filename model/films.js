const Films = class {
  constructor({
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
    starships,
    vehicles,
    species,
    created,
    edited,
    url,
  }) {
    this.titulo = title;
    this.episodio_id = episode_id;
    this.texto_apertura = opening_crawl;
    this.director = director;
    this.productor = producer;
    this.fecha_lanzamiento = release_date;
    this.personajes = characters;
    this.planetas = planets;
    this.naves = starships;
    this.vehiculos = vehicles;
    this.especies = species;
    this.creado = created;
    this.editado = edited;
    this.url = url;
  }
  getFilm() {
    return this;
  }
};

module.exports = Films;
