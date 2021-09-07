import io from 'socket.io-client';
import { AddMessageRequest } from './actions/message.actions';
import store from './createStore';

let socket = null;

export const connectSocket = () => {
  socket = io('194.44.111.70:4730/blog');
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
