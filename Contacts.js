class Contacts {
  constructor() {
    this.contacts = [];
  }
  getAllContacts() {
    return this.contacts;
  }

  geContactById(id) {
    return this.contacts.find((contact) => {
      contact.id === id;
    });
  }
}
