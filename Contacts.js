class Contacts {
  constructor() {
    this.contacts = [];
  }

  getAllContact() {
    return this.contacts;
  }

  getContactById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }

  createContact(contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    return contact;
  }

  updateContact(id, updatedContact) {
    let index = this.contacts.findIndex((contact) => contact.id === id);

    this.contacts[index].name = updatedContact || this.contacts[index].name;
    this.contacts[index].phone = updatedContact || this.contacts[index].phone;
    this.contacts[index].email = updatedContact || this.contacts[index].email;

    return this.contacts[index];
  }

  deleteContactById(id) {
    const index = this.contacts.indexOf((contact) => contact.id === id);

    const deletedObj = this.contact[index];

    this.contacts.filter((contact) => contact.id !== id);

    return deletedObj;
  }
}

const contacts = new Contacts();

module.exports = contacts;
