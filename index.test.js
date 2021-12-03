const {sequelize} = require('./db')
const {Musician} = require('./index')

//test musician database CRUD
describe('Muscian Database', () => {
    //force sync database
    beforeAll(async() => {
        await sequelize.sync({force:true})
    })

    //create instances of Musician Model for testing
    const arrayOfMusicians =[
        {name: 'Prince',age:55, instrument: 'guitar',band:'walyas'},
        {name: 'Kasem', age:33,instrument: 'dhol',band:'Roha'}
    ]
    
    test('musicians have name', async() => {
        await Musician.bulkCreate(arrayOfMusicians)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMusician = await Musician.findOne({
            where: {
              name: 'Prince'
            }
          });
        expect(testMusician.name).toBe('Prince')
    })

    test('musicians have an instrument', async() => {
     //   await Musician.bulkCreate(arrayOfMusicians)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMusician = await Musician.findOne({
            where: {
              name: 'Prince'
            }
          });
        expect(testMusician.instrument).toBe('guitar')
    })


    test('musicians have an instrument', async() => {
        //   await Musician.bulkCreate(arrayOfMusicians)
           // await Musician.create({name: 'Prince', instrument: 'guitar'})
         //  const musicians = await Musician.findOne();
   const testMusician = await Musician.findOne({
               where: {
                 name: 'Kasem'
               }})

           console.log(testMusician.instrument)
           expect(testMusician.instrument).toBe('dhol')
        
       })

})