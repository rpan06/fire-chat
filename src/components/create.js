import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createChatRoom} from '../../actions';
import Input from '../general/input'



class CreateRoom extends React.Component {
    handleSaveRoom = values => {
        console.log('Handle Save Room: ', values);
        const roomId = await this.props.createChatRoom(values);
        console.log('Room Id:', roomId)
        this.props.history.push(`/room/${roomId}`)
    }
    render(){
        const { handleSubmit } = this.props;
        return(
            <div>
                <h1 className="center">Create Chat Room</h1>
            </div>
        )
    }
}

CreateRoom = reduxForm({
    form: 'create-room'
})(CreateRoom)

export default connect(null,{
    createChatRoom
})(CreateRoom);
