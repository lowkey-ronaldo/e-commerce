import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext({
  users: [],
  onSubmitHandler: () => {},
  isLogged: false,
  loggedUser: "",
  setLoggedUser: () => {}
});

export const UsersProvider = ({ children }) => {
  const urlUsers =
    "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/credentials.json";

  const [fetchUsers, setFetchUsers] = useState([]);
  const [users, setUsers] = useState(fetchUsers);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    fetch(urlUsers)
      .then((resp) => resp.json())
      .then((USERS) => setFetchUsers(USERS));
  }, []);

  useEffect(() => {
    setUsers(fetchUsers);
  }, [fetchUsers]);

  // Funzione responsabile di cercare se esiste il codice cliente nel database
  const onSubmitHandler = (input) => {
    const user = users.find((user) => {
      return user.codiceCliente === input;
    });

    if(user !== undefined) {
      setLoggedUser(user.nome);
      setIsLogged(true);
      localStorage.setItem("isLogged", true);
      localStorage.setItem("user", user.nome)
    } 
    else{
      alert("Codice cliente sbagliato")
    }
    
    return user;
  };

  const value = { users, 
                  onSubmitHandler, 
                  isLogged, 
                  setIsLogged, 
                  loggedUser, 
                  setLoggedUser 
                };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
