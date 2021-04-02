const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args) => {
            if (args.user) {
                const userData = await User.findOne({ _id: args.user._id })
                    .select('-__v -password')
                    .populate('Photo')
                return userData;
            }
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('Photo')
        },
        // get a user by username
        user: async (parent, { name }) => {
            return User.findOne({ name })
                .select('-__v -password')
                .populate('Photo')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            return user;
        },
        addPhoto: async (parent, { _id, input }, args) => {
            if (args) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: _id },
                    { $push: { photos: input } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }

        },
    }
}
module.exports = resolvers;