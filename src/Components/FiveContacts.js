import React from 'react';
import contacts from '../contacts';

class FiveContacts extends React.Component {
  state = {
    fiveContacts: contacts.splice(0, 5),
  };

  addContactHandler = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      fiveContacts: [...this.state.fiveContacts, randomContact],
    });
  };

  sortByName = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    });
  };

  delete = (id) => {
    let newContacts = [...this.state.fiveContacts];
    let contactsRemoveIndex = newContacts.findIndex((item) => {
      return item.id === id;
    });
    newContacts.splice(contactsRemoveIndex, 1);
    this.setState({ fiveContacts: newContacts });
  };

  render() {
    return (
      <div>
        <button onClick={this.addContactHandler}> Add random Contact</button>
        <button onClick={this.sortByName}> Sort by Name</button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.fiveContacts.map((item) => (
            <tr>
              <td>
                <img src={item.pictureUrl} width="100" />
              </td>
              <td>{item.name}</td>
              <td>{item.popularity}</td>
              <td>
                <button onClick={this.delete}> Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default FiveContacts;
