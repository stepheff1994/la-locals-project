const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('photos')
                    .populate('userLikes');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        // get all users
        // users: async () => {
        //     return User.find()
        //         .select('-__v -password')
        //         .populate('photos')
        //         .populate('userLikes');
        // },
        // users: async (parent, { area, identity, preference } , context) => {
        //     if (context.user) {
        //         return User.find({ area, identity, preference })
        //             .select('-__v -password')
        //             .populate('photos')
        //             .populate('userLikes');
        //     }
            
        // },
        users: async (parent, args , context) => {
            if (context.user) {
                const matchData = await User.find({ area: context.user.area, identity: context.user.preference, preference: context.user.identity })
                    .select('-__v -password')
                    .populate('photos')
                    .populate('userLikes');
                    return matchData;
            }
                throw new AuthenticationError('Not logged in');
        },
        // get a user by email
        user: async (parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('photos')
                .populate('userLikes');
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
        addLikedFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { userLikes: friendId } },
                    { new: true }
                ).populate('userLikes');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          },
    }
}
module.exports = resolvers;