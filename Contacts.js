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
}

module.exports = new Contacts();
