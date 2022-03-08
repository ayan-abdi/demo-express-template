const express = require('express');
const chalk = require('chalk');
const path = require('path');
const homeRouter = require('./routes/home-router');
const logger = require('./middleware/logger-middleware');
const poort = 9000;
const app = express();
// variable de config
const rootDir = process.cwd();
// const rootDir = process.cwd();cwd permet de recuperer la racine de mon projet


// app.get('/', (req, res) => {
//     res.status(200);
//     res.send('<h1>Goed Morgen allemaal ☺</h1>')
// }

// Configurer le moteur de vue
// Express va utiliser le moteur de vue automatiquement
app.set('view engine','ejs');
// Configuration du répertoire dans le lequel sont les vues
app.set('views',path.resolve(rootDir,'views'));


//   Ajout des routers
app.use(homeRouter);
app.use(logger());

app.use(express.urlencoded({ extended: true}));

app.listen(poort, () => {
    console.log(chalk.magenta(`KomBinnen in mijn app ${poort}`));
});

