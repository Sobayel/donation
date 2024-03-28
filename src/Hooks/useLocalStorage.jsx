import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utils/localStorage";


const useLocalStorage = () => {
    // local storage theke data input
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        setLocalData(getFromLocalStorage());
    },[]);
    return {localData};
};

export default useLocalStorage;