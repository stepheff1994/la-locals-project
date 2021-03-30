import { useEffect, useState } from 'react'
// Set a prefix for local storage to differentiate this id
const PREFIX = 'dating-chat-'
// key = what will get stored in localStorage
// initialValue = what gets passed into useState
function useLocalStorage(key, initialValue) {
    // have the prefix added to the key we pass in
    const prefixedKey = PREFIX + key
    // use function version of useState to get the id only once
    // get value from local storage and put it into our state
    const [value, setValue] = useState(() => {
        // get the json verson of the key from local storage
        const jsonValue = localStorage.getItem(prefixedKey);
        // if jsonValue exists or is not equal to null return the parsed jsonValue
        if (jsonValue != null) {
            return JSON.parse(jsonValue)
        }
        // otherwise check if the initialValue is a function then use that function value of useState and use that function
        if (typeof initialValue === "function") {
            return initialValue();
        } else {
            // otherwise return default value of initialValue
            return initialValue;
        }
    })

    // get our value and save it to local storage using useEffect fucntion
    useEffect(() => {
        // stringify the value and set it to local storage
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    // anytime any of these change overwite the old value
    }, [prefixedKey, value])
    
    // return the two useState values 
    return [value, setValue];
}

export default useLocalStorage;