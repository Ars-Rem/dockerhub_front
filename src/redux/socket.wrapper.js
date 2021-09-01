import io from 'socket.io-client';
import { AddMessageRequest } from './actions/message.actions';
import store from './createStore';

let socket = null;

export const connectSocket = () => {
  socket = io('http://localhost:6525');
  socket.on('new bleat', (data) => {
    store.dispatch(AddMessageRequest(JSON.parse(data)));
  });
  return socket;
};

export const disconnect = () => {
  if (socket) {
    socket.disconnect();
  }
};
