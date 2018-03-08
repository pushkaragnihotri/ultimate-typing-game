const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;
const WordListSchema = require('./WordList');

const userSchema = new Schema({
    facebook: {
        id: String,
        token: String
    },
    google: {
        id: String,
        token: String
    },
    local: {
        username: {
            type: String,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            trim: true
        },
        password: String
    },
    multiplayerWins: { type: Number, default: 0 },
    level: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now },
    createdWordLists: [WordListSchema]
});


userSchema.methods.generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = (password, storedPassword) => {
    return bcrypt.compareSync(password, storedPassword);
};

mongoose.model('users', userSchema);