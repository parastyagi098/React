import React, {Component, useImperativeHandle} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';


class App extends Component {
  render()
  {  return (
    <div className="App">
      <LifeCycleA></LifeCycleA>
      {/*<Form></Form>
      <h1 className= 'error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline></Inline>
      <StyleSheet primary={true}/>
      <NameList></NameList>
      {/*<UserGreeting></UserGreeting>
      <ParentComponent></ParentComponent>
      <EventBind></EventBind>
       <FunctionClick></FunctionClick> 
      <ClassClick></ClassClick>
     <Counter/>
      <Message/>
      <Greet name="Wayne" heroname="Batman"/>
      <Greet name="Clark" heroname="Superman"/>
      <Welcome name="Bruce Wayne" heroname="Batman"/>
      <Hello/>
      <Greet name="Barry" heroName="Flash"/>*/}
    </div>
  );
}


}

export default App;
