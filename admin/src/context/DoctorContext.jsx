
import { createContext } from 'react'

export const DoctorContext=createContext()

const DoctorContextProvider=(props)=>
{
  const value={


  }

  return (
    <div>

      <DoctorContext.Provider value={value}>
{props.children}

        
      </DoctorContext.Provider>
    </div>
  )
}

export default DoctorContextProvider;