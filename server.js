const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({});
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


// const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3003;


const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//HANDLEBARS
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(require('./controllers/mainRoute.js'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})



// app.get('/', function(req, res){
//   res.type('text/plain');
//   res.render('main')
// })
// var handlebars = require('express-handlebars').create({defaultLayout: 'main'});