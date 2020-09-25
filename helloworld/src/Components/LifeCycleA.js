import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Paras' 
        }
        console.log('LifeCycleA constructor')
    }

    static getDeriverStateFromProps(props,state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponenetUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'CodeRevolution'
        })
    }
    
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
