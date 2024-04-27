const mongoose = require("mongoose");

async function connectToDatabase() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/LoginFormPractice", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongoose connected');
    } catch (e) {
        console.log('Failed to connect:', e);
    }
}

connectToDatabase();

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const LogInCollection = mongoose.model('LogInCollection', logInSchema);

module.exports = LogInCollection;
