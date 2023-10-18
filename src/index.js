const express = require('express');
const app = express();

const {filtrarProfessores,
     encontrarUmProfessor
    } = require('./controladores/Professores');

//localhost:3000/professores
app.get("/professores",filtrarProfessores );

//localhost:3000/professores/:id
app.get("/professores/:id", encontrarUmProfessor);

app.listen(3000);