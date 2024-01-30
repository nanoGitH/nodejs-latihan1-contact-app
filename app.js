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
    }
})
.demandCommand()

//perintah menampilkan semua contact
yargs.command({
    command: 'list',
    describe: 'menampilkan seluruh list contacts',
    handler() {
        contact.listContact()
    }
})

//perintah menampilkan detail satu contact
yargs.command({
    command: 'detail',
    describe: 'menampilkan detail satu contact',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler() {
        contact.listContact()
    },
    handler(argv) {
        contact.detailContact(argv.nama)
    }
})

//perintah menghapus satu contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'menghapus satu contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'nama lengkap',
            demandOption: true,
            type: 'string'
        },
    },
    handler() {
        contact.listContact()
    },
    handler(argv) {
        contact.deleteContact(argv.nama)
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