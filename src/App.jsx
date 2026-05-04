import { useCallback, useEffect, useState } from "react";
import "tailwindcss";

const App = () => {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");




  const passwordGenerator = useCallback(() => {
    let genPassword = "";
    let dummyString = "abcdefghijklmopqrstuvwxyz";
    let size = 24;
    let charList = dummyString.split('');
   // console.log('char-list',charList);

    if(numberAllowed) {
      dummyString += "123456789";
      size += 9;
    }
    if(charAllowed) {
      dummyString += "!@#$%^&*()";
      size += 9;

    }
    let rendom =Math.floor( length * Math.random());
    for(let i = 1; i <= length;i++){
      let index = ((dummyString.length + rendom) * i) % size;
      console.log('index',index);
      genPassword += dummyString.charAt(index);
    }

    console.log('size', size);
    setPassword(genPassword);
  }
    , [length,numberAllowed, charAllowed]);


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator]);
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
          />
          <button className="outline-none bg-blue-700 text-white text-center
           px-3 py-0.5 shrink-0 " onClick={() => { }}>
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