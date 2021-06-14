import React, {createContext, useState} from 'react';


export const MainContext = createContext();


export const MainProvider = (props) => {
    const [show, setShow] = useState(false);
      return (
        <MainContext.Provider
          value={{
            show,
            setShow,
          }}
        >
          {props.children}
        </MainContext.Provider>
      );
  }