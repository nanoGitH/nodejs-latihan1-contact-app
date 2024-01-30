const yargs = require("yargs")
const contact = require('./contacts')

yargs.command({
    command: 'add',
    describe: 'menambahkan contact baru',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'nomor hp',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        contact.simpanContact(argv.nama, argv.email, argv.noHP)

        // console.log(contact);
    }
})
yargs.parse()
































// const contact = require('./contacts')   //require keknya harus begini

// const main = async () => {
//     const nama = await contact.pertanyaan('nama: ')
//     const email = await contact.pertanyaan('email: ')
//     const hp = await contact.pertanyaan('hp: ')

//     contact.simpanContact(nama, email, hp)
// }

// main()