class Contacts {
  constructor() {
    this.contacts = [];
  }

  getAllContacts() {
    return this.contacts;
  }

  createContact(contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    return contact;
  }

  getSingleContactById(id) {
    return this.contacts.find((contact) => contact.id === id);
  }

  updateContactById(id) {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    let updatedContact = this.contacts[index];
    this.contacts[index].name =
      updatedContact.name || this.contacts[index].name;
    this.contacts[index].email =
      updatedContact.name || this.contacts[index].email;
    this.contacts[index].phone =
      updatedContact.name || this.contacts[index].phone;
    return updatedContact;
  }
}

module.exports = new Contacts();
