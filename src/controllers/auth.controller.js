import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role'

export const singUp = async (req, res)  => {
    const {username, email, password, roles} = req.body;


    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

        if(roles){
         const fountRole = await Role.find({name: {$in: roles}});
         newUser.roles = fountRole.map(role => role._id);
        }else {
            const role = await Role.findOne({name:"user"});
            newUser.roles = [role._id];
        }

    const savedUser = await newUser.save();
    console.log(savedUser);

    const token = jwt.sign({id:savedUser._id}, config.SECRET, {
        expiresIn: 86400 //24 horas
    })

    res.status(200).json({token});


}

export const singin = async (req, res)  => {
    const {email} = req.body;
    const userFound = await User.findOne({email}).populate("roles");

    if(!userFound) return res.status(400).json({message: "User not fount"});

    const matchPassword = await User.comparePassword(req.body.password, userFound.password);

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'});

    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 86400 //24 horas
    })

    console.log(userFound);
    res.json({token});
}