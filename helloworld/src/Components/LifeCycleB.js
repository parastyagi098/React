import React, { Component } from 'react'

 class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Paras' 
        }
        console.log('LifeCycleB constructor')
    }

    static getDeriverStateFromProps(props,state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponenetUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    }
}

export default LifeCycleB
