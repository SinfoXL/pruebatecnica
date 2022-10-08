import { useState } from "react"

export default function Dashboard(){

  const [PV , setPV] = useState(0);
  const [dataComplete , setDataComplete] = useState(false)

  const [data , setData] = useState({
    nameEmployee : '',
    companyEmploye : '',
    nameCustomer : '',
    contactCustomer : '',
    companyCustomer : '',
    costProduct : '',
    marginProduct : '',
  });


  const handleInputChange = (event) => {
      setData({...data, [event.target.name] : event.target.value });

      console.log(event.target.value)

      if (data[event.target.name]  === 'undefined'){
        console.log(`el campo ${event.target.name} no esta diligenciado`)
      }
  }

  const calculatePV = (e) =>{
    e.preventDefault();
    const {costProduct , marginProduct } = data;
       let salePrice = Math.round(parseFloat((costProduct / (1-marginProduct))));

       (salePrice % 1000 > 0) && (salePrice = 1000 + salePrice - (salePrice % 1000 ))

       setPV(salePrice)

    setDataComplete(true)

  }


    return(
        <div className="mt-14 flex justify-center ">  

            <form  method="POST" onSubmit={calculatePV} className=" p-4 w-8/12 flex flex-wrap justify-center rounded-md bg-gray-50 drop-shadow-md">  

                    <div className="flex">
                      <h2 className="bg-slate-500 p-3 rounded-md text-white">Formulario de calculo</h2>
                      <div className=" mx-4 w-60 p-2 bg-white rounded-md border-solid border-2 border-indigo-600">
                        <h2 className="text-center">{PV === 0 ? 0 : `El precio de venta es = ${PV}`}</h2>
                      </div>
                    </div>
                    
                    <div className="mt-1 p-4 rounded-md drop-shadow-md w-full ">

                          <label htmlFor="nombreEmploye">Nombre del empleado</label>
                          <input type="text" name="nameEmploye" id=""  placeholder="nombre empleado"
                            className=" mb-4 p-2 rounded-md outline-none w-full" onChange={handleInputChange} required />

                          <label htmlFor="nombreEmploye">Empresa del empleado</label>
                          <input type="text" name="companyEmploye" id=""  placeholder="nombre empleado"
                            className=" mb-4 p-2 rounded-md outline-none w-full" onChange={handleInputChange} required />
                    </div>

                  <div className="flex">
                    <div className="p-4 mx-2 mt-2 drop-shadow-md rounded-md w-full ">

                          <label className="text-green-600" htmlFor="nombreEmploye">Nombre del cliente</label>
                          <input type="text" name="nameCustomer" id=""  placeholder="nombre empleado"
                              className=" mb-4 p-2 rounded-md outline-none w-full" onChange={handleInputChange} required />

                          <label className="text-green-600" htmlFor="nombreEmploye">Contacto del cliente</label>
                          <input type="text" name="contactCustomer" id=""  placeholder="nombre empleado"
                            className=" mb-4 p-2 rounded-md outline-none w-full" onChange={handleInputChange} required />
                          
                          <label className="text-green-600" htmlFor="nombreEmploye">Empresa del cliente</label>
                          <input type="text" name="companyCustomer" id=""  placeholder="nombre empleado"
                            className=" mb-4 p-2 rounded-md outline-none w-full" onChange={handleInputChange} required />

                    </div>

                    <div className="p-4 mx-2 mt-2 rounded-md drop-shadow-md w-full ">

                          <label className="text-blue-600" htmlFor="nombreEmploye">Costo del producto</label>
                          <input type="text" name="costProduct" id=""  placeholder="nombre empleado"
                              className=" mb-4 p-2 rounded-md outline-none w-full" onChange={handleInputChange} required />

                          <label className="text-blue-600" htmlFor="nombreEmploye">Margen estimado</label>
                          <input type="text" name="marginProduct" id=""  placeholder="nombre empleado"
                            className=" mb-4 p-2 rounded-md outline-none w-full" onChange={handleInputChange} required />

                          <button type="submit" className="w-full bg-blue-400 mt-6 py-2 rounded-md" >Calcular</button>

                    </div>

                  </div>

                  
                {
                   dataComplete && 
                 <h3 className="text-justify p-3">Hola {data.nameEmployee}! <br/>
                    El precio de venta del producto que deseas entregar a 
                   <span className="text-red-600"> {data.nameCustomer} </span> de la compañía
                   <span className="text-red-600"> {data.companyCustomer}</span> es de
                   <span className="text-green-700"> [{PV}]</span><br/>
                    Con esta venta la <span className="text-green-700"> {data.companyEmploye} </span> tendrá un margen de X%.
                  </h3>
                }

            </form>
        </div>
    )
}