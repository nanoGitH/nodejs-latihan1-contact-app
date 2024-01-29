const fs = require('node:fs');

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

//cek apakah directory exists
if(!fs.existsSync('data')) {
    //buat folder data
    fs.mkdirSync('data')
}
if(!fs.existsSync('data/contacts.json')) {
    fs.writeFileSync('data/contacts.json', '[]')
}

const pertanyaan = (tanya) => {
    return new Promise((resolve, reject) => {
        rl.question(tanya, jawaban => {
            resolve(jawaban)
        })  
    })
}

const simpanContact = (nama, email, hp) => {
    const jawab = {nama, email, hp}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    
    contacts.push(jawab)
    console.log(contacts);
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    
    rl.close();
}

module.exports = {pertanyaan, simpanContact}

// rl.question('Ini keknya kek alert atau apalah di js biasa kan? ', (a) => {
//     rl.question('pertanyaan kedua: ', b => {
//         const newContact = {a, b}
//         const file = fs.readFileSync('data/contacts.json', 'utf-8')
//         const contacts = JSON.parse(file)

//         contacts.push(newContact)
//         console.log(contacts);

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

//         rl.close();
//     })
// });