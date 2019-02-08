const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if (err){
    return console.log ('unable to connect to mongodb server.')
}

console.log ('connected to mongodb server');
const db = client.db('todoApp');

// db.collection('Todos').insertOne({
//     text:'something to do',
//     completed:false
// }, (err,result) =>{
//     if (err) {
//         return console.log('Unable to insert todo', err);
//     }

//     console.log(JSON.stringify(result.ops, undefined, 2));
// });


db.collection('Users').insertOne({
    name:'Leeloo Multipass',
    age:false,
    location:'In the place with the things'
}, (err,result) =>{
    if (err) {
        return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
});
client.close();
});
