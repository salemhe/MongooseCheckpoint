// Import necessary modules and models
let database = require('./database')
let personModel = require('./models/person')


// Create a new person document and save it
let person = new personModel({
    name: 'Salem Hamis',
    age: 19,
    favoriteFoods: ['Rice','Noodles']
})

// Save document
person.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
         console.error(err)
    })



// Create multiple person documents and save them
personModel
    .create([
        {
            name:'Dominion David',
            age:20,
            favoriteFoods:['Rice','Beans']
        },
        {
            name:'Sharon Ebuka',
            age:18,
            favoriteFoods:['Cake','Bread']
        },
        {
            name:'June Roberts',
            age:21,
            favoriteFoods:['Eba','Gbegiri']
        }
    ])
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
    


// Find all person documents
personModel
    .find()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })



// Find a person document by their favorite food
personModel
    .findOne({
        'favoriteFoods': 'Eba'
    })
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        });



// Find a person document by its ID
personModel
    .findById({
        '_id': '654c131f0a6c06f3574253a5'
    })
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        });



// Find a person by ID, update their favorite foods, and save the changes
personModel
    .findById('654c13743a2e9dddfc1d2da6')
        .then(doc => {
            if (doc) {
                doc.favoriteFoods.push('hamburger');
                return doc.save();
            } 
            else {
                console.log('Person not found');
            }
        })
            .then(savedDoc => {
                console.log('Updated Person:', savedDoc);
            })
            .catch(err => {
                console.error(err);
            });



// Find a person by name and update their age, returning the updated document
personModel
    .findOneAndUpdate(
    {
        'name':'Salem Ewere Hamis'
    },
    {
        $set: {age: 20}
    },
    {
        new: true
    })
        .then(doc => {
                console.log(doc)
        })
        .catch(err => {
                console.error(err)
        })



// Find a person by ID, and delete document
personModel
    .findOneAndDelete(
        {
            '_id': '654c13743a2e9dddfc1d2da5'
        })
        .then(doc => {
                console.log(doc)
        })
        .catch(err => {
                console.error(err)
        })
