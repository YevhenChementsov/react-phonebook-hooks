import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import {
  ErrorText,
  Input,
  InputName,
  SubmitFormButton,
} from './ContactAddForm.styled';

export const ContactAddForm = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleAddContact = values => {
    onSubmit(values);
    reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(handleAddContact)}>
      <label htmlFor={nameInputId}>
        <InputName>Name</InputName>
        <Input
          type="text"
          id={nameInputId}
          {...register('name', {
            required: "'Name' is required field",
            minLength: {
              value: 2,
              message: "'Name' must be at least 2 characters",
            },
            maxLength: {
              value: 25,
              message: "'Name' must be at most 25 characters",
            },
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              message:
                "A name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",
            },
          })}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </label>
      <label htmlFor={numberInputId}>
        <InputName>Number</InputName>
        <Input
          type="tel"
          id={numberInputId}
          {...register('number', {
            required: "'Number' is required field",
            pattern: {
              value:
                /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              message:
                'The phone number must consist of the digits and may contain spaces, dashes, parentheses and may begin with +',
            },
          })}
        />
        {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
      </label>

      <SubmitFormButton type="submit">Add contact</SubmitFormButton>
    </form>
  );
};

ContactAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
