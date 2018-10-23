import React from 'react';

class CreateRoom extends React.Component {
    handleSaveRoom = values => {
        console.log('Handle Save Room: ', values);
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

export default CreateRoom;
