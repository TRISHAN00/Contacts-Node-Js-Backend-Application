class Contacts {
  constructor() {
    this.contacts = [];
  }

  getSingleContactById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }

  createContact(contact) {
    contact.id = this.contacts + 1;
    this.contacts.push(contact);
    return contact;
  }

  updateContactById(id, updatedContactObj) {
    let index = this.contacts.findIndex((contact) => contact.id === id);
    this.contacts[index].name =
      updatedContactObj.name || this.contacts[index].name;

    this.contacts[index].email =
      updatedContactObj.email || this.contacts[index].email;

    this.contacts[index].phone =
      updatedContactObj.phone || this.contacts[index].phone;

    return this.contact[index];
  }

  deleteContactById(id) {
    let index = this.contacts.findIndex((contact) => contact.id === id);
    let deletedContact = this.contacts[index];
    this.contacts.filter((contact) => contact.id !== id);
    return deletedContact;
  }
  getAllContacts() {
    return this.contacts.push(this.contacts);
  }
}

module.exports = new Contacts();
