import { useState } from 'react'
 
import './App.css'
import useFunc from './hooks/useFunc'
import Input from './components/Input'

function App() {
   
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [To,setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useFunc(from)

  // console.log(Object.keys(currencyInfo))
  const options = Object.keys(currencyInfo);
  // console.log(options)
  
  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[To])
  }
  const swap = () => {
    setFrom(To)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    // <>
    
    // <Input 
    // label={"from"}
    // amount={amount}
    // onAmountChange ={(amount)=>setAmount(amount)}
    // onCurrencyChange={(currency)=>setAmount(currency)}
    // currencyOptions = {options}
    // selectCurrency={from}
    // />
    // <Input 
    // label={"To"}
    // />
    // </>
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1">
                <Input 
                  label={"from"}
                  amount={amount}
                  onAmountChange ={(amount)=>setAmount(amount)}
                  onCurrencyChange={(currency)=>setFrom(currency)}
                  currencyOptions = {options}
                  selectCurrency={from}
                />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                 <Input 
                  label={"To"}
                  amount={convertedAmount}
                  onAmountChange ={(amount)=>setAmount(amount)}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  currencyOptions = {options}
                  selectCurrency={To}
                />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {To.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
