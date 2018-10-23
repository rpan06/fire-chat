import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMessages} from '../../actions';

class Chat extends Component {
    roomRef = null;
    chatRef = null;
    componentDidMount(){
        const {getMessages, match: {params}} = this.props;
        console.log('Room ID:', params.room_id)
        this.dbRef = this.props.getMessages(params.room_id)
    }
    componentDidUpdate(prevProps){

    }
    componentWillUnmount(){
        if(this.roomRef){
            this.roomRef.off();
        }
        this.dbRef.off();
    }
    render(){
        const {messages} = this.props;
        return(
            <div>
                <div className="center">
                    <h1>{title || 'Chat Room'}</h1>
                </div>
                <h1 className="center">Chat Room</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        ...state.chat
    }
}

export default Chat
