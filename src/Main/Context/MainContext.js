import React, {createContext, useState} from 'react';


export const MainContext = createContext();


export const MainProvider = (props) => {
    const [showSignUpPopup, setShowSignUpPopup] = useState(false);
    const [showSignInPopup, setShowSignInPopup] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userTools, setUserTools] = useState([]);
      return (
        <MainContext.Provider
          value={{
            showSignUpPopup,
            setShowSignUpPopup,
            userTools,
            setUserTools,
            showSignInPopup,
            setShowSignInPopup,
            isLoggedin,
            setIsLoggedin,
          }}
        >
          {props.children}
        </MainContext.Provider>
      );
  }