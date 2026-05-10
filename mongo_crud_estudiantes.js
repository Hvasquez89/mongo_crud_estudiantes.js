// Usar base de datos
use('gestionestudiantes');

// CREATE
db.estudiantes.insertMany([
  {
    nombre: "Hector Vasquez",
    edad: 36,
    activo: true,
    Especializacion: "Desarrollo Web",
    Modulo: 3
  },
  {
    nombre: "Jesser Lopez",
    edad: 28,
    activo: true,
    Especializacion: "Base de Datos",
    Modulo: 2
  }
]);

// READ
db.estudiantes.find();
db.estudiantes.findOne({ nombre: "Hector Vasquez" });

// UPDATE
db.estudiantes.updateOne(
  { nombre: "Hector Vasquez" },
  { $set: { edad: 37 } }
);

// DELETE
db.estudiantes.deleteOne({ nombre: "Jesser Lopez" });
