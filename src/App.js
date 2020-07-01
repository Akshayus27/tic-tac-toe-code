import React from 'react'
import Board from './components/Board'
import styles from './App.module.css'

class App extends React.Component {
  
  render(){
    return (
      <div>
        <div className={styles.bar}>
          <p className={styles.game}>TIC TAC TOE</p>
        </div>
        <Board />
      </div>
    )
  }
}

export default App;
