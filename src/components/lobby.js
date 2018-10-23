import React from 'react';
import {Link} from 'react-router-dom'

class Lobby extends React.Component {
    render(){
        const {list} = this.props;
        return (
            <div>
                <h1 className="center">Chat Lobby</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/room/create" className="btn orange">Create Room</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lobby;
