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

const loadContacts = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    return contacts
} 

const simpanContact = (nama, email, hp) => {
    const jawab = {nama, email, hp}
    // const file = fs.readFileSync('data/contacts.json', 'utf-8')
    // const contacts = JSON.parse(file)
    const contacts = loadContacts()

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

const listContact = () => {
    const contacts = loadContacts()
    contacts.forEach((e,i) => {
        console.log(`${i + 1}. ${e.nama} - ${e.hp}`)
    })
}

// const detailContact = (nama) => {
//     const contacts = loadContacts()

//     contacts.forEach(e => {
//         if(e.nama == nama) {
//             console.log(`${e.nama} - ${e.hp} - ${e.email}`)
//         }
//     })
// }
const detailContact = (nama) => {
    const contacts = loadContacts()

    const contact = contacts.find( contact => contact.nama.toLowerCase() === nama.toLowerCase())

    if(!contact) {
        console.log(`${nama} tidak ditemukan`);
        return false
    }

    console.log(contact.nama);
    console.log(contact.hp);
    if(contact.email) {
        console.log(contact.email);
    }
}

const deleteContact = (nama) => {
    const contacts = loadContacts()
    const newContact = contacts.filter(e=> e.nama.toLowerCase() !== nama.toLowerCase())

    if(contacts.length === newContact.length) {
        console.log(`${nama} tidak ditemukan`);
        return false
    }    
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContact))

    console.log(`contact ${nama} berhasil dihapus`);
}

module.exports = {simpanContact, listContact, detailContact, deleteContact}

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