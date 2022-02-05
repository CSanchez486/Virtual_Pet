const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({});
// creates unique ids for video rooms
const { v4: uuidv4 }= require("uuid");
// const helpers = require('./utils/helpers'); __This uses bcrypt to keep password safe - confirm if this needs to be deleted____

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
app.use(require('./controllers/hbsRoutes'));


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})

// Referenced: https://levelup.gitconnected.com/building-a-video-chat-app-with-node-js-socket-io-webrtc-26f46b213017
const server = require('http').Server(app)
app.use(express.static('public'));
app.set('view engine','ejs')

// Lets socket.io know what server we are using
app.get("/", (req,res) => {
    res.render("consult");
});
app.get("/:consult", (req,res) => {
    res.render("consult", { consultID: req.params.room });
})

// server.listen(3030)
