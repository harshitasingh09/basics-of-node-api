const Joi= require('joi');
const express = require("express");
const app = express();
const courses = [
    { id: 1, name: 'node.js' },
    { id: 2, name: 'react.js' },
    { id: 3, name: 'next.js' }
]
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world from node tutorials')
});

//params
// app.get('/api/posts/:year/:month',(req,res)=>{
// res.send(req.params);
// });

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('the course not found');
    res.send(course);
});



//POST method
app.post('/api/courses', (req, resp) => {
    const schema={
        name: Joi.string().min(3).required()
    }
   const result= Joi.validate(req.body, schema);
   console.log(result);
if(result.error){
    resp.status(400).send(result.error.details[0].message)
    return
}
 const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    resp.send(courses).write('new course added ');
});

app.listen(port, () => {
    console.log(`listening on port  ${port}`)
})