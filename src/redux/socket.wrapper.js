import io from 'socket.io-client';
import { AddMessageRequest } from './actions/message.actions';
import store from './createStore';

let socket = null;

export const connectSocket = () => {
  socket = io('http://192.168.3.236:4730');
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
