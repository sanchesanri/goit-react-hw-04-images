import { CiSearch } from 'react-icons/ci';
import { Header, Form, Button, Label, Input } from './Searchbar.styled';
import { useState } from 'react';

export function Searchbar({ handlerForm }) {
  const [formValue, setFormValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!formValue) {
      return;
    }
    handlerForm(formValue);
  };

  const handleClick = evt => {
    setFormValue(evt.target.value);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <CiSearch />
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          value={formValue}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleClick}
        />
      </Form>
    </Header>
  );
}
