import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Input, InputName, SubmitFormButton } from './ContactAddForm.styled';
// import { ContactFormInput } from './ContactFormInput/ContactFormInput';

// const contactAddValidationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2)
//     .max(25)
//     .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
//       message:
//         "A name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",
//     })
//     .required(),
//   number: Yup.string()
//     .max(24)
//     .matches(
//       /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
//       {
//         message:
//           'The phone number must consist of the digits and may contain spaces, dashes, parentheses and may begin with +',
//       },
//     )
//     .required(),
// });

export const ContactAddForm = ({ onSubmit }) => {
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleAddContact = values => {
    onSubmit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleAddContact}>
      <label htmlFor={nameInputId}>
        <InputName>Name</InputName>
        <Input type="text" name="name" id={nameInputId} required />
      </label>
      <label htmlFor={numberInputId}>
        <InputName>Number</InputName>
        <Input type="tel" name="number" id={numberInputId} required />
      </label>

      <SubmitFormButton type="submit">Add contact</SubmitFormButton>
    </form>
  );
};

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
