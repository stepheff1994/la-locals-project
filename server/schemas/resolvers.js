const { User } = require('../models');
const resolvers = {
    Query: {
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
    }
}
module.exports = resolvers;