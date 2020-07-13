import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';


const App = () => {
  const { userInfo } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (! userInfo) {
      // dispatch(loadUserInfoRequest())
    }
  }, [userInfo])


  return (
      <>

      </>
  )
}

export default App;
