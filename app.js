const contact = require('./contacts')   //require keknya harus begini

const main = async () => {
    const nama = await contact.pertanyaan('nama: ')
    const email = await contact.pertanyaan('email: ')
    const hp = await contact.pertanyaan('hp: ')

    contact.simpanContact(nama, email, hp)
}

main()