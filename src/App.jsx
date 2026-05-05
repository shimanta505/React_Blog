import { useCallback, useEffect, useRef, useState } from "react";
import "tailwindcss";

const App = () => {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);




  const passwordGenerator = useCallback(() => {
    let genPassword = "";
    let dummyString = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
    let size = 48;
   // console.log('char-list',charList);

    if(numberAllowed) {
      let numbers =  "123456789";
      dummyString += numbers;

      size += 9;
    }
    if(charAllowed) {
      let chars = "!@#$%^&*()";
      dummyString += chars;

      size += 10;

    }
    let rendom = Math.floor( length * Math.random());
    numberAllowed ? rendom+=9 : charAllowed ? rendom += 19 : null;

    for(let i = 1; i <= length;i++){
      let index = ((dummyString.length + rendom) * i) % size;
      console.log('index',index);
      genPassword += dummyString.charAt(index);
    }

    console.log('size', size);
    setPassword(genPassword);
  }
    , [length,numberAllowed, charAllowed]);


    const copyPasswordToClipboard = useCallback(async() => {
      try{
     await navigator.clipboard.writeText(password);
      }catch(e){
        console.log(e);
      }
    },[password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed]); // when i have to call my childrens
  return (
    <div>
      <div className="w-full max-w-md mx-auto shadow-md
       rounded-lg px-4 py-3 my-3 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white text-center
           px-3 py-0.5 shrink-0 hover:scale-110 hover:transition-normal hover:duration-300 active:bg-blue-800 cursor-pointer">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={30} value={length} className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor="number input">Number </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor="Char input">Char </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;