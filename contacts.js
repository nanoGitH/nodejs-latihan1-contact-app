const fs = require('node:fs');
const validator = require('validator')

//cek apakah directory exists
if(!fs.existsSync('data')) {
    //buat folder data
    fs.mkdirSync('data')
}
if(!fs.existsSync('data/contacts.json')) {
    fs.writeFileSync('data/contacts.json', '[]')
}

const simpanContact = (nama, email, hp) => {
    const jawab = {nama, email, hp}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)

    //cek duplikat
    const duplikat = contacts.find(contact => contact.nama === nama)
    if (duplikat) {
        console.log('kontak sudah terdaftar');
        return false
    }
    
    //validasi email
    if (email) {
        if (!validator.isEmail(email)) {
            console.log('email tidak valid');
            return false            
        }
    }

    //validasi nohp
    if (!validator.isMobilePhone(hp, 'id-ID')) {
        console.log('nohp tidak valid');
        return false            
    }

    contacts.push(jawab)
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

module.exports = {simpanContact}

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