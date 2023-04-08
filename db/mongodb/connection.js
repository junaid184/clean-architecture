let mongoose = require('mongoose');

const mongoURI =
    "mongodb+srv://username:password@cluster0.ajsaz.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.set('useNewUrlParser', true);
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongoose successfully");
    });
};

module.exports = connectToMongo;