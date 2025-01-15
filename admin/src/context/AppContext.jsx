
import { createContext } from 'react'

export const AppContext=createContext()

const AppContextProvider=(props)=>
{
  const value={


  }

  return (
    <div>

      <AppContext.Provider value={value}>
{props.children}

        
      </AppContext.Provider>
    </div>
  )
}

export default AppContextProvider;