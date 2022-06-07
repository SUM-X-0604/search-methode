import { useState } from 'react';
import { Users } from './Users'
import './App.css'
import Table from './Table';

function App() {
  const [query, setQuery] = useState('');

  const keys = ['first_name', "last_name", "email", 'gender']

  const search = (data) => {
    return data.filter((item) => (
      keys.some((key) => item[key].toLowerCase().includes(query))
    ))
  }

  return (
    <>
      <div className='app'>
        <input
          type="text"
          placeholder='search here...'
          className='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* first methode start */}
        {/* <ul className='list'>
          {Users.filter((user) => user.first_name.toLowerCase().includes(query)).map((user) => (
            <li key={user.id} className='listItem'>
              {user.first_name}
            </li>
          ))}
        </ul> */}
        {/* first methode end */}

        {/* second methode start(Multiple search) */}

        <Table data={search(Users)} />

        {/* second methode end */}

      </div>
    </>
  );
}

export default App;
