import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [authors, setAuthors] = useState([]);

  const handleSubmit = async() => {
    try {
      const response = await axios.post("http://localhost:8080/api/authors", {name});
      console.log("Author successfully created ", response.data);
      setName("");
      setAuthors([...authors,response.data]);
    }
    catch(error) {
      console.log("error in create author", error);
    }
  }

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/authors");
        console.log("get authors successfully",response.data);
        setAuthors(response.data)
      }
      catch(error) {
        console.log("error in fetch authors",error);
      };
    };
    fetchAuthors();
  },[]);

  return (
    <div>
      <h1>Create Authors</h1>
      <label>Author Name: </label>
      <input 
        type='text' 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit' onClick={handleSubmit}> Create Authors</button>
      <h2>Authors list</h2>
        <ul>
          {authors.map((author) => <li key={author.id} >{author.name}</li>
          )}
        </ul>
    </div>
  )
}

export default App
