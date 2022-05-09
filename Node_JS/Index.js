//CoreModule

/*const url = require('url');

const Url = new URL ('https://www.google.com');

console.log(Url.pathname);
console.log(Url.href);
console.log(Url.hostname);
console.log(Url.protocol);*/

const http = require('http');
const path = require('path');
const fs = require('fs');

const app = http.createServer((req, res) => {
    console.log('Hello');
});

/*const app = http.createServer((req, res) => {
    if(req.url === '/')
    {
        fs.readFile(path.join(`${__dirname}/Main/Home.html`), 'utf8', (err, data) => {
            if(err) {throw err}
            res.end(data);
        })
    }
    if(req.url === '/service') {
        fs.readFile(path.join(`${__dirname}/Main/Service.html`), 'utf8', (err, data) => {
            if(err) {throw err}
            res.end(data);
    })
}
    if(req.url === '/about') {
        res.end('<h1>About</h1>')
    }
});*/

const PORT = process.env.PORT || 2500;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});




























//Local Module

/*const global = require('./One');

var obj = new global.myClass('Sathish');
obj.myFunc();*/

/*const path = require('path');
const fs = require('fs');*/

/*fs.mkdir('test', (err) => {
    if(err) {throw err}
    fs.writeFile(path.join(`${__dirname}/test/test.js`), 'I love Node', (err) => {
    if(err) {throw err}
    console.log('File Created');
})
})*/

/*fs.readFile(path.join(`${__dirname}/test/test.js`), 'I love node', (err) => {
   if(err) {throw err}
   console.log('File Created');
})*/


//console.log(path.join(`${__dirname}/test/test.js`));

//console.log(path.parse(__filename).name);





















//console.log(__dirname);
//console.log(__filename);












/*const readline = require('readline');
const events = require('events');
const crypto = require('crypto');

const hash = crypto.createHmac('sha256', 'akshaya').update('I love Jenifer').digest('hex');
console.log(hash);*/



//Core Module
/*
const readline = require('readline');
const events = require('events');

const myEmitter = new events.EventEmitter();

var x = ['Sathish', 'Keerthana', 'SriKirthika'];

myEmitter.on('my', () => {
    for(let i=0; i<x.length; i++) {
        console.log(i + " " + x[i]);
    }
    console.log('Shoot up');
});
setTimeout(() => {
myEmitter.emit('my');
}, 3000);
*/

/*const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question('What is your name?', (ans) => {
    if(ans === "Jenifer") {
        rl.close();
    }
    else {
        rl.setPrompt('Wrong Name - Try Again with Correct Input \n');
        rl.prompt();
        rl.on('line', (inp) => {
            if(inp === "Jenifer") {
                rl.close();             
            } else {
                rl.setPrompt(inp + ' Wrong \n');
                rl.prompt();
            }
        })
    }
})
rl.on('close', () => {
    console.log('Correct');
})*/


