function App() {
const user={
  firstname:"Durga",
  lastname:"Bhavani"
  };
  function userdetails(user)
  {
    return `My firstname: ${user.firstname} and lastname: ${user.lastname}`;
  }
  return (
    <div className="App">
      <h2>{userdetails(user)}</h2>
      <img src="fdk" alt={user.firstname}/>
    </div>
  );
}
export default App;
