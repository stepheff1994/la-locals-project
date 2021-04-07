const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { findOneAndUpdate } = require('../models/User');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('Photo')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('Photo')
        },
        // get a user by email
        user: async (parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('Photo')
        }
    },
    Mutation: {
        // find way to get args to use data from token payload???
        addUser: async (parent, args) => {
            console.log(args)
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };

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

            const token = signToken(user);

            return { token, user };
        },
    }
}
module.exports = resolvers;