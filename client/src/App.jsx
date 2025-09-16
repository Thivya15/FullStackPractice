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
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-8'>
      <h1 className='text-3xl font-bold text-blue-600 mb-6'>Create Authors</h1>
      <div className='flex gap-3 mb-6'>
        <input
          className='border border-gray-300 rounded:lg px-4 py-1 focus:ring-2 focus:ring-blue-500' 
          type='text' 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button 
          className='bg-blue-500 text-white rounded:lg hover:bg-blue-600 transition px-3' 
          type='submit' 
          onClick={handleSubmit}
        > 
          Create Authors
        </button>
      </div>
      <h2 className='text-2xl font-semibold text-gray-700 mb-3'>Authors list</h2>
        <ul className='bg-white shadow-md rounded:lg p-4 w-80'>
          {authors.map((author) => 
            <li 
              key={author.id}
              className='border-b last:border-none py-2 text-gray-800' >{author.name}</li>
          )}
        </ul>
    </div>
  )
}

export default App
