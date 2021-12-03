//models go here

const {sequelize, DataTypes, Model} = require('./db')

//create model for musicians in our database
class Musician extends Model {
    //add query methods here

}

//create attributes for model using init method
Musician.init({
    name: DataTypes.STRING,
    age:DataTypes.INTEGER,
    instrument: DataTypes.STRING,
    band :DataTypes.STRING
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false//we dont need to create timestamps everytime we create a recorde
})

module.exports = {Musician}