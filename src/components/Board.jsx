import React from 'react'
import styles from './Board.module.css'

const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

let chance = 0

export default class Board extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            x: true,
            xRow: [],
            oRow: []
        }
    }

    handleClick = async (e) => {
        e.persist()
        if(this.state.x){
            e.target.textContent='X'
            e.target.setAttribute('disabled', 'disabled')

            await this.setState({
                xRow: [...this.state.xRow, Number(e.target.value)], 
                x : false 
            })     
        }else{
            e.target.textContent='O'
            e.target.setAttribute('disabled', 'disabled')

            await this.setState({
                oRow: [...this.state.oRow, Number(e.target.value)],
                 x : true 
            })
        }
        if(this.isAWin()) window.location.reload()
    }

    isAWin = () => {
        chance += 1
        for(let win of wins){
            let x = win.every(element => this.state.xRow.includes(element))
            let o = win.every(element => this.state.oRow.includes(element))
            
            if(x){
                alert('X WINS')
                return true
            }else if(o){
                alert('O WINS')
                return true
            }else if(chance === 9){
                alert('DRAW')
                return true
            }
        }
    }


    render() {
        return(
            <div className={styles.board}>
            <div>
                <button onClick={(e) => this.handleClick(e)} value="1"></button>
                <button onClick={(e) => this.handleClick(e)} value="2"></button>
                <button onClick={(e) => this.handleClick(e)} value="3"></button>
            </div>
            <div>
                <button onClick={(e) => this.handleClick(e)} value="4"></button>
                <button onClick={(e) => this.handleClick(e)} value="5"></button>
                <button onClick={(e) => this.handleClick(e)} value="6"></button>
            </div>
            <div>
                <button onClick={(e) => this.handleClick(e)} value="7"></button>
                <button onClick={(e) => this.handleClick(e)} value="8"></button>
                <button onClick={(e) => this.handleClick(e)} value="9"></button>
            </div>
        </div>
        )
    }
}