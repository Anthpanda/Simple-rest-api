import Roles from '../models/Role';
import User from '../models/User'

export const checkDuplicatedUserOrEmail = async (req, res, next) => {

        const user = await User.findOne({username: req.body.username});
        console.log(req.body.username);
        if(user) return res.status(400).json({message: "The user already exists"});

        const email = await User.findOne({email: req.email});

        if(email) return res.status(400).json({message: "The email already exists"});

        next();

}

export const checkRoleExisted = async (req, res, next) => {
    const roles = req.body.roles;

    for (let i = 0; i < roles.length; i++) {
        const checkRole = await Roles.findOne({
            name: roles[i]
        }, {
            _id: 0
        });

        if (!checkRole) {

            return res.status(400).json({
                message: `Role '${roles[i]}' does not exist`
            })

        }


    }

    next();
}