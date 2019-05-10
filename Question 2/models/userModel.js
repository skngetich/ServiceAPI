const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


UserSchema.pre('save', function(next) {

    const user = this;

    const hash = bcrypt.hashSync(this.password, 10);

    this.password = hash;

    next();
});


UserSchema.methods.isValidPassword = function(password) {
    const user = this;

    const compare = bcrypt.compare(password, user.password);
    console.log("valid pass", compare);
    return compare;
}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;