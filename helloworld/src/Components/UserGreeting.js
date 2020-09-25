import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn ? (
            <div>Welocme Paras!</div>
            ) : (<div>Welcome Guest!</div>)
        

        {/*let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Paras!</div>
        } else {
            message = <div>Welocme Guest!</div>
        }
        return <div>{message}</div>
        {/* if(this.state.isLoggedIn){
            return <div>Welcome Paras!</div>
        }else {
        return(
            <div>Welcome Guest!</div>
        )
        }
       return (
            <div>
               <div>Welcome Paras!</div>
                <div>Welocme Guest!</div>
            </div>
        )*/}
    }
}

export default UserGreeting
