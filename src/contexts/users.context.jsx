import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext({
  users: [],
  onSubmitHandler: () => {},
  isLogged: false,
  loggedUsers: "",
  setLoggedUsers: () => {}
});

export const UsersProvider = ({ children }) => {
  const urlUsers =
    "https://stage-app-109c7-default-rtdb.europe-west1.firebasedatabase.app/credentials.json";

  const [fetchUsers, setFetchUsers] = useState([]);
  const [users, setUsers] = useState(fetchUsers);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));
  const [loggedUsers, setLoggedUsers] = useState("");

  useEffect(() => {
    fetch(urlUsers)
      .then((resp) => resp.json())
      .then((USERS) => setFetchUsers(USERS));
  }, []);

  useEffect(() => {
    setUsers(fetchUsers);
  }, [fetchUsers]);

  const onSubmitHandler = (value) => {
    const user = users.find((user) => {
      return user.codiceCliente === value;
    });
    if(user !== undefined) {
      
      setLoggedUsers(user.nome);
      localStorage.setItem("isLogged", true);
      localStorage.setItem("user", user.nome)
      setIsLogged(true);
    } 
    return user;
  };

  const value = { users, 
                  onSubmitHandler, 
                  isLogged, 
                  setIsLogged, 
                  loggedUsers, 
                  setLoggedUsers 
                };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
