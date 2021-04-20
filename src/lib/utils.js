import Role from '../models/Role';
import User from '../models/User';

export const validateRole = async (UserId) => {

    const user = await User.findById(UserId);
    const role = await Role.find({_id: {$in: user.roles}});
    return role;
}