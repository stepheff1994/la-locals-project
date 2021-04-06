const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const path = require('path');
const http= require('http');
const Conversation= require('./models/Conversation')

const PORT = process.env.PORT || 3001;
const app = express();






const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  const server = app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
  const io = require('socket.io')(server)
  io.on('connection', socket => {
    // pass in the id of the user
    // socket creates a new id every time the page is refreshed.
    // this way we create our own static id
    const id = socket.handshake.query.id
    socket.join(id)
    // get the recipients and text for the messages
    socket.on('send-message', ({ recipients, text }) => {
      // loop through all of the recipients
      recipients.forEach(recipient => {
        // remove the current recipient from the list of recipients
        const newRecipients = recipients.filter(r => r !== recipient)
        // take in the new recipients and push in the id of the person sending the message
        // the sender is added to the list of recipients and the reciever is removed from that list
        newRecipients.push(id)
        socket.broadcast.to(recipient).emit('receive-message', {
          recipients: newRecipients, sender: id, text
        })
      })
    })

    // socket.on('newConversation', convo, msg  => {
    //   const conversation = new Conversation({convo});
    //   conversation.save().then(() => {
    //     io.emit('conversation', convo)
    //   })
    // })
  }) 
});
