import { useEffect, useState } from 'react';

import { ContactAddForm } from '@/components/ContactAddForm/ContactAddForm';
import { ContactList } from '@/components/ContactList/ContactList';
import { IconsWrapper } from '@/components/IconWrapper/IconsWrapper';
import { SearchFilter } from '@/components/SearchFilter/SearchFilter';
import { Time } from '@/components/Time/Time';
import { ReactComponent as Close } from '@/icons/reply.svg';
import { ReactComponent as Open } from '@/icons/user-plus.svg';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import {
  ButtonIcon,
  Container,
  Footer,
  Header,
  Title,
  Wrapper,
} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contactList')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
  );
  const [filter, setFilter] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('contactList', JSON.stringify(contacts));

    if (contacts.length >= 9) {
      const message = 'Your memory is full. Please, delete some contacts!';
      const typeOfMessage = 'error';
      showNotification(typeOfMessage, message);
    }
  }, [contacts]);

  const showNotification = (type, message) =>
    toast[type](message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const message = `${contact.name} is already in contacts.`;
    const typeOfMessage = 'warn';
    const alreadyExist = contacts.some(contact => contact.name.includes(name));

    if (alreadyExist) return showNotification(typeOfMessage, message);

    setContacts(state => [contact, ...state]);
    toggle();
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const deleteContact = id =>
    setContacts(state => state.filter(contact => contact.id !== id));

  const getFilteredContacts = () => {
    return [...contacts].filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const sortContacts = () =>
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));

  const toggle = () => setVisible(!visible);

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <h1 hidden>Phonebook App</h1>
      <Header>
        <Wrapper>
          <Time />
          <IconsWrapper />
        </Wrapper>
        <Title>Contacts</Title>
        {!visible && (
          <SearchFilter
            value={filter}
            onChangeFilter={changeFilter}
            onSortContacts={sortContacts}
          />
        )}
      </Header>
      <main>
        {visible ? (
          <ContactAddForm onSubmit={addContact} />
        ) : (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        )}
      </main>
      <Footer>
        <ButtonIcon onClick={toggle} disabled={contacts.length === 9}>
          {visible ? (
            <Close width="24" height="24" />
          ) : (
            <Open width="24" height="24" />
          )}
        </ButtonIcon>
      </Footer>
      <ToastContainer />
    </Container>
  );
};

export default App;
