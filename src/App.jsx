import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Dashboard from './views/Dashboard'

import { faGauge, faArrowRight , faTowerCell} from '@fortawesome/free-solid-svg-icons'

const itemsMenu = [
  { title  : 'formulario', icon : faGauge, gap : false},
]

const chartOptions = {
  series: [{
      name: 'Online Customers',
      data: [40,70,20,90,36,80,30,91,60]
  }, {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
  }],
  options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
          background: 'transparent'
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      legend: {
          position: 'bottom'
      },
      grid: {
          show: false
      }
  }
}

function App() {
  const [open, setOpen] = useState(true)

  return (
    <div className = "flex bg-gray-100">
        <div className = {`${open ? 'w-60' : ' w-20'} h-screen bg-white shadow-md relative text-center duration-500`}>

            <div className = {`${!open ? '' : 'rotate-180'} absolute w-6 -right-3 top-6 bg-blue-300 rounded-full`}
              onClick={() => setOpen(!open)}><FontAwesomeIcon size='sm' icon={faArrowRight} />
            </div>

            <div className = {`flex items-center px-4 pt-4 pb-4 mb-8 bg-slate-100`}>
              <div className={`bg-blue-400 p-2 w-10 rounded-md  ${open ? '' : 'rotate-180' } duration-500 `}><FontAwesomeIcon size='sm' icon={faTowerCell} /></div>
              <h1 className= {`${!open && 'hidden'} font-bold p-2`}>PRUEBA</h1>
            </div>

            <ul>
              {itemsMenu.map((item, index)=> (
                <li className = {`${item.gap ? 'mt-6' : ''}`} key={index}> 
                  <div className="flex  hover:bg-blue-100  py-2 mx-2 px-2 rounded-md">
                    <div className="bg-slate-100 p-2 w-10 rounded-md"><FontAwesomeIcon size='sm'icon={item.icon} /></div>
                    <a className = {`${!open && 'hidden'} origin-left text-black text-md font-semibold flex items-center ml-4 `} href=""> {item.title} </a>
                  </div>
                </li>
              ))}
            </ul>
        </div>
              
        <main className=' flex flex-col items-center w-full'>        
          {/* <input placeholder='Buscar' className= ' text-start outline-none mt-4 h-10 rounded-md py-2 px-4 w-5/12 border-solid border-1 border-gray-200 drop-shadow-md' type="text" /> */}
              
          <div className="">
              <Dashboard/>
          </div>

        </main>

    </div>
  )
}

export default App
