import { useState, useCallback, useEffect ,useRef} from "react"
function App() {
  const [length, setlength] = useState(8)
  const [Allowedchar, setAllowedchar] = useState(false);
  const [Allowednumber, setAllowednumber] = useState(false)
  const [password, setpassword] = useState("")

  const passref=useRef(null)

  const passwordgenarator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Allowedchar) str += '!#~$%^&*()_+-/;'
    if (Allowednumber) str += '1234567890'
    for (let i = 0; i <= length; i++) {
     let char=Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)

    }
    setpassword(pass)
  }, [length, Allowedchar, Allowednumber, setpassword]) //useCallback(fn,dependencies)
  const copyPasswordToClipboard=useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,111)
    window.navigator.clipboard.writeText(password)},[password])
  useEffect(() => { passwordgenarator() }, [length, Allowedchar, Allowednumber, passwordgenarator
  ])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="password"
            readOnly
            ref={passref}
          />
          <button
          onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setlength(e.target.value) }} />
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={Allowednumber}
              id="numberinput"
              onChange={() => { setAllowednumber((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Allowedchar}
              id="characterInput"
              onChange={() => {
                setAllowedchar((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
