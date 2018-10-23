import types from './types'
import {db} from '../firebase';

export const getMessages = (roomId) => dispatch => {
    const dbRef = db.ref(`/chat-rooms/${roomId}`);

    dbRef.on('value', (snapshot) => {
        console.log('DB Snapshot:', snapshot.val());
        dispatch({
            type: types.GET_CHAT_MESSAGES,
            messages: snapshot.val()
        });
    });
    return dbRef;
}


export const createChatRoom = roomDetails => async dispatch => {
    const dbRef = db.ref(`/chat-rooms/${roomId}`)
    const botMessage = {
        message: `Welcome to ${roomDetails.title}`,
        name: 'Chat-Bot'
    }
    const logKey = db.ref('/chat-logs').push().key;

    roomDetails.chatId = logKey;
    const roomRef = await db.ref('/chat-rooms').push(roomDetails)
    await db.ref(`/chat-logs/${logKey}`).push(botMessage);
    return roomRef;
}
