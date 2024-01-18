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
    // this.setState({ formValue: evt.target.value });
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
// export class Searchbar extends Component {
//     state = {
//         formValue: '',
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         if (!this.state.formValue) {
//             return
//         }
//         this.props.handlerForm(this.state.formValue);
//     };

//     handleClick = evt => {
//         this.setState({ formValue: evt.target.value });
//     };

//     render() {
//         const { formValue } = this.state;
//         return (
//             <Header>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Button type="submit">
//                         <CiSearch />
//                         <Label>Search</Label>
//                     </Button>

//                     <Input
//                         type="text"
//                         autoComplete="off"
//                         value={formValue}
//                         autoFocus
//                         placeholder="Search images and photos"
//                         onChange={this.handleClick}
//                     />
//                 </Form>
//             </Header>
//         );
//     }
// }
