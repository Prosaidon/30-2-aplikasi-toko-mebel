import React from 'react';
import './Contact.css';

function ContactCard({ name, phone, email, onClick }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px 0',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.3s',
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e0f7fa')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
    >
      <h3 style={{ margin: '0 0 8px 0' }}>{name}</h3>
      <p style={{ margin: '4px 0' }}>📞 {phone}</p>
      <p style={{ margin: '4px 0' }}>📧 {email}</p>
    </div>
  );
}

function ContactList() {
  const contacts = [
    { id: 1, name: 'Ferry Ale Lesmana', phone: '123-456-7898', email: 'ferryale@gmail.com' },
    { id: 2, name: 'Rizky Hidayatullah', phone: '987-654-3232', email: 'rizkyhidayat@gmail.com' },
    { id: 3, name: 'Nabila Eka Putri', phone: '987-654-3212', email: 'nabila@gmail.com' },
    { id: 4, name: 'Ramlan Kusuma', phone: '987-654-3210', email: 'ramlankusuma@gmail.com' },
  ];

  const handleContactClick = (contact) => {
    alert(`Anda memilih kontak: ${contact.name}`);
  };

  return (
    <div style={{padding: '50px', maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Kontak Saya</h1>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
          onClick={() => handleContactClick(contact)}
        />
      ))}
    </div>
  );
}

export default ContactList;
