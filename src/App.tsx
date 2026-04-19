import { useState } from 'react'
import './App.css'
import splitterLogo from '../images/logo.svg'
import dollarSign from '../images/icon-dollar.svg'
import personSign from '../images/icon-person.svg'

function App() {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState('')
  const [people, setPeople] = useState('')

  const reset = () => {
    setBill('')
    setTip('')
    setPeople('')
  }

  console.log('bill: ', bill, ' tip: ', tip, ' people: ', people)
  console.log(isFinite((bill / people) + (bill / people * (tip / 100))))

  return (
    <div className='font-["Space_Mono"] bg-[#c5e4e7] flex flex-col items-center h-[98vh] py-6 gap-6 pt-12 lg:pt-22'>
      <div className='mb-6'>
        <img src={splitterLogo} alt="splitter-logo" />
      </div>
      <div className='bg-white lg:grid lg:grid-cols-2 w-full flex flex-col gap-6 p-6 px-8 lg:p-8 rounded-t-2xl max-w-[1000px] lg:rounded-2xl'>
        <div className='flex flex-col gap-8 p-6'>
          <div className='relative'>
            <p className='text-[#5e7a7d] font-bold mb-2'>Bill</p>
            <textarea placeholder='0' value={bill} onChange={(e) => setBill(e.target.value)} className='text-right bg-[#f3f8fb] focus:outline-2 focus:outline-[#26c0ab] h-12 p-2 px-4 text-2xl text-[#00494d] font-bold overflow-hidden w-full rounded-md'></textarea>
            <img src={dollarSign} alt="dollar-sign" className='absolute bottom-[22px] left-4'/>
          </div>
          <div>
            <p className='text-[#5e7a7d] font-bold mb-2 lg:mb-4'>Select tip %</p>
            <div className='grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-4'>
              <p className={`${tip === '5' ? 'bg-[#26c0ab] text-[#00494d]' : 'bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-black'} transition font-bold text-center py-2 rounded-sm text-xl cursor-pointer`} onClick={() => setTip('5')}>5%</p>
              <p className={`${tip === '10' ? 'bg-[#26c0ab] text-[#00494d]' : 'bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-black'} transition font-bold text-center py-2 rounded-sm text-xl cursor-pointer`} onClick={() => setTip('10')}>10%</p>
              <p className={`${tip === '15' ? 'bg-[#26c0ab] text-[#00494d]' : 'bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-black'} transition font-bold text-center py-2 rounded-sm text-xl cursor-pointer`} onClick={() => setTip('15')}>15%</p>
              <p className={`${tip === '25' ? 'bg-[#26c0ab] text-[#00494d]' : 'bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-black'} transition font-bold text-center py-2 rounded-sm text-xl cursor-pointer`} onClick={() => setTip('25')}>25%</p>
              <p className={`${tip === '50' ? 'bg-[#26c0ab] text-[#00494d]' : 'bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-black'} transition font-bold text-center py-2 rounded-sm text-xl cursor-pointer`} onClick={() => setTip('50')}>50%</p>
              <textarea placeholder='Custom' value={tip} onChange={(e) => setTip(e.target.value)} className='text-right bg-[#f3f8fb] focus:outline-2 focus:outline-[#26c0ab] h-11 p-1.5 px-4 text-2xl text-[#00494d] font-bold overflow-hidden w-full rounded-sm'></textarea>
            </div>
          </div>
          <div className='relative'>
            <p className='text-[#5e7a7d] font-bold mb-2'>Number of people</p>
            <p className={`${people == 0 ? 'opacity-100' : 'opacity-0'} transition absolute text-red-600 top-0 right-1`}>Can't be zero</p>
            <textarea placeholder='0' value={people} onChange={(e) => setPeople(e.target.value)} className={`${people == 0 ? 'focus:outline-red-600' : 'focus:outline-[#26c0ab]'} text-right bg-[#f3f8fb] h-12 p-2 px-4 text-2xl focus:outline-2 text-[#00494d] font-bold overflow-hidden w-full rounded-md`}></textarea>
            <img src={personSign} alt="person-sign" className='absolute bottom-[22px] left-4'/>
          </div>
        </div>
        <div className='bg-[#00494d] p-6 rounded-xl flex flex-col gap-4 lg:p-10 lg:justify-between'>
          <div className='flex flex-col gap-14'>
            <div className='flex flex-row justify-between items-center mt-2'>
              <div className='flex flex-col'>
                <p className='text-white font-bold'>Tip amount</p>
                <p className='text-sm text-[#7f9c9f] font-bold'>/ person</p>
              </div>
              <div>
                <p className='text-[#26c0ab] font-bold text-2xl lg:text-5xl'>${isFinite(bill / people * (tip / 100)) == false ? '0.00' : (bill / people * (tip / 100)).toFixed(2)}</p>
              </div>
            </div>
            <div className='flex flex-row justify-between items-center mb-4'>
              <div className='flex flex-col'>
                <p className='text-white font-bold'>Total</p>
                <p className='text-sm text-[#7f9c9f] font-bold'>/ person</p>
              </div>
              <div>
                <p className='text-[#26c0ab] font-bold text-2xl lg:text-5xl'>${isFinite((bill / people) + (bill / people * (tip / 100))) == false ? '0.00' : ((bill / people) + (bill / people * (tip / 100))).toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <button className='bg-[#26c0ab] transition hover:bg-[#c5e4e7] w-full py-2 font-bold text-[#00494d] rounded-md lg:text-2xl cursor-pointer disabled:cursor-not-allowed disabled:bg-[#0d686d]' onClick={() => reset()} disabled={!isFinite((bill / people) + (bill / people * (tip / 100)))}>RESET</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
