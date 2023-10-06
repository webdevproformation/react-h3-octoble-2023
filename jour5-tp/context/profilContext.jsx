import { createContext , useState } from "react"
export const ProfilContext = createContext();
export const ProfilContextProvider = ({children}) => {
    const [profil, setProfil] = useState({ login : "alain" , password : "1234" , isLogged : false })
    const login = function(identifiants){
        if(identifiants.loggin === profil.login && identifiants.password === profil.password){
            setProfil({... profil , isLogged : true })
            return true ;
        }
        return false ; 
    }
    const logout = function(){
        setProfil({... profil , isLogged : false })
    }
    return <ProfilContext.Provider value={{ profil , logout , login }}>
        {children}
    </ProfilContext.Provider>
}