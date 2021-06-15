import React, {createContext, useState} from 'react';


export const MainContext = createContext();


export const MainProvider = (props) => {
    const [show, setShow] = useState(false);
    const [userTools, setUserTools] = useState([]);
      return (
        <MainContext.Provider
          value={{
            show,
            setShow,
            userTools,
            setUserTools,
          }}
        >
          {props.children}
        </MainContext.Provider>
      );
  }