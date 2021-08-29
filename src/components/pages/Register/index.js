import { useState } from 'react';
import { Link } from 'react-router-dom';
import isBirthValid from '../../utils/isBirthValid';
import formatCepCpf from '../../utils/formatCepCpf';
import FormGroup from '../../FormGroup';
import Input from '../../Input';

import { ButtonsContainer, Form } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [state, setState] = useState('State');
  const [city, setCity] = useState('City');
  const [neighborhood, setNeighborhood] = useState('Neighborhood');
  const [street, setStreet] = useState('Street');

  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handleBirthChange(event) {
    setBirth(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'birth', message: 'Data de nascimento é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'birth',
      ));
    }

    const errorAlreadyExists = errors.find((error) => error.field === 'format');

    if (event.target.value && !isBirthValid(event.target.value)) {
      if (errorAlreadyExists) {
        return;
      }
      setErrors((prevState) => [
        ...prevState,
        { field: 'format', message: 'Utilize o formato DD/MM/AAAA.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'format',
      ));
    }
  }

  function handleCpfChange(event) {
    setCpf(formatCepCpf(event.target.value));

    formatCepCpf(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'cpf', message: 'CPF é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'cpf',
      ));
    }
  }

  function handleCepChange(event) {
    setCep(formatCepCpf(event.target.value));

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'cep', message: 'CEP é obrigatório.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'cep',
      ));
    }
  }

  async function handleCepAdress() {
    try {
      const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await resp.json();
      // backend CORS block message in console
      setState(data.uf);
      setCity(data.localidade);
      setNeighborhood(data.bairro);
      setStreet(data.logradouro);
      if (!data.uf) {
        setState('CEP inválido.');
        setCity('CEP inválido.');
        setNeighborhood('CEP inválido.');
        setStreet('CEP inválido.');
        setErrors((prevState) => [
          ...prevState,
          { field: 'cep', message: 'CEP inválido.' },
        ]);
      }
    } catch {
      setState('Falha na busca do endereço.');
      setCity('Falha na busca do endereço.');
      setNeighborhood('Falha na busca do endereço.');
      setStreet('Falha na busca do endereço.');
      setErrors((prevState) => [
        ...prevState,
        { field: 'cep', message: 'CEP inválido.' },
      ]);
    }
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  const isFormValid = (name, birth, cep, cpf && errors.length === 0);

  console.log(errors);
  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name, birth, cep, cpf,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Healthy Food</h1>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Name"
          value={name}
          name="Register"
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup
        error={getErrorMessageByFieldName('birth')
        || getErrorMessageByFieldName('format')}

      >
        <Input
          maxLength="10"
          error={getErrorMessageByFieldName('birth')
          || getErrorMessageByFieldName('format')}
          placeholder="Date of birth"
          value={birth}
          name="Register"
          onChange={handleBirthChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('cep')}>
        <Input
          maxLength="8"
          error={getErrorMessageByFieldName('cep')}
          placeholder="CEP"
          value={cep}
          name="Register"
          onChange={handleCepChange}
          onBlur={handleCepAdress}

        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('cpf')}>
        <Input
          maxLength="11"
          error={getErrorMessageByFieldName('cpf')}
          placeholder="CPF"
          value={cpf}
          name="Register"
          onChange={handleCpfChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          disabled
          value={state}
          name="Register"
        />

      </FormGroup>

      <FormGroup>
        <Input
          disabled
          value={city}
          name="Register"
        />
      </FormGroup>

      <FormGroup>
        <Input
          disabled
          value={neighborhood}
          name="Register"
        />
      </FormGroup>

      <FormGroup>
        <Input
          disabled
          value={street}
          name="Register"
        />
      </FormGroup>

      <ButtonsContainer>
        <button type="button">
          <Link to="/">Cancel</Link>
        </button>
        <button type="submit" disabled={!isFormValid}>Register</button>

      </ButtonsContainer>
    </Form>
  );
}
