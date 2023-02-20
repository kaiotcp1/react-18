import { useState, useEffect } from 'react'
import './App.css'
const url = "https://api.github.com/users/kaiotcp1";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        const user = await response.json();
        setUser(user);

      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>There was an error...</h2>
  }

  return (
    <div className="App">
      <img style={{width:'150px', borderRadius:'25px'}} src={user.avatar_url} alt={user.name} />
      <div className="read-the-docs">
        <p>{user.company}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Repository: {user.public_repos}</p>
      </div>
      <h2>{user.name}</h2>
      <h4>{user.bio}</h4>
    </div>
  )
}

export default App
