import React from 'react';
import logo from './logo.svg';
import './App.css';
// import ClassMouse from './component/ClassMouse';
// import ClassCounterOne from './component/ClassCounterOne';
// import HookCounter from './component/HookCounter';
// import HookCounterOne from './component/HookCounterOne';
// import HookCounterTwo from './component/HookCounterTwo';
// import HookCounterThree from './component/HookCounterThree';
// import HookCounterFour from './component/HookCounterFour';
// import HookMouse from './component/HookMouse';
// import MouseContainer from './component/MouseContainer';
// import IntervalClassCounter from './component/IntervalClassCounter';
// import IntervalHookCounter from './component/IntervalHookCounter';
import DataFetching from './component/DataFetching';
import ComponentE from './component/ComponentE';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentE/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
    </div>
  );
}

export default App;
