import io from 'socket.io-client';
import { AddMessageRequest } from './actions/message.actions';
import store from './createStore';

let socket = null;

export const connectSocket = () => {
  socket = io('http://194.44.111.70:4735');
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
