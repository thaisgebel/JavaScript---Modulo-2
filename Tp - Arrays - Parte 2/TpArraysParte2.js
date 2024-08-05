/*1. Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias, y la nota de aprobación (4/6/7) e imprima:
● Nombre del usuario
● Cantidad de materias cursadas
● Cantidad de materias aprobadas
● Las notas de las materias aprobadas
● Cantidad de materias reprobadas
● Las notas de las materias reprobadas
● Si el alumno pasó de año (aprobó todas las materias)
●Indicar si el alumno tuvo algún 10
●Indicar si el alumno aprobó alguna materia raspando (con la nota mínima de aprobación)*/

let subjectNotes = [1, 5, 6, 10, 3, 9];
let subjectsStudied = [
  "Matematica",
  "Ed. fisica",
  "Historia",
  "Lengua",
  "Fisica",
  "Ciencias sociales",
];

function estadoEscolar(nameStudent, examNotes, aprove) {
  console.log("Informe de el/la estudiante " + nameStudent + ".");

  let subjectCursed = subjectsStudied.filter(function (cursed) {
    return cursed.length > 1;
  });
  console.log("Las materias cursadas son: " + subjectCursed + ".");

  let numberOfApprovedSubjects = examNotes.filter(function (number) {
    return number >= 6;
  });

  console.log(
    "La cantidad de las materias aprobadas son " +
      numberOfApprovedSubjects.length
  );

  let notesSubjectApproved = examNotes.filter(function (approved) {
    return approved >= 6;
  });
  console.log(
    "Las notas de las pruebas aprobadas son " + notesSubjectApproved + "."
  );

  let numberOfFailedSubjects = examNotes.filter(function (number) {
    return number < 6;
  });

  console.log(
    "La cantidad de las materias desaprobadas son " +
      numberOfFailedSubjects.length
  );

  let notesSubjectAproved = examNotes.filter(function (failed) {
    return failed < 6;
  });
  console.log(
    "Las notas de las materias desaprobadas son " + notesSubjectAproved + "."
  );

  if (subjectCursed.length === numberOfApprovedSubjects.length) {
    console.log("El/la alumno/a " + nameStudent + " paso de curso.");
  } else {
    console.log("El/la alumno/a " + nameStudent + " no paso de curso.");
  }

  
}

let stateScolar = estadoEscolar("Mengano", subjectNotes, 6);
