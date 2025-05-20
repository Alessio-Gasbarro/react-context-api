import { createContext, useContext } from "react";
import { useState } from "react";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
    //definire i valori iniziali dell'alert
    const initialData = { type: "", message: "" }

    //creo variabile di stato e gli assegno initialData
    const [alertData, setAlertData] = useState(initialData);

    console.log(AlertContext);
    //restituiamo il provider
    return (
        <AlertContext.Provider
            value={{ alertData, setAlertData }}>
            {children}
        </AlertContext.Provider>
    );
};

//definizione funzione che consuma/recupera il contesto
const useAlertContext = () => {
    const context = useContext(AlertContext);
    return context;
};

export { AlertProvider, useAlertContext };
