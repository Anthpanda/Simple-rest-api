import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';
import {
   validateRole
} from '../lib/utils';

export const verifyToken = async (req, res, next) => {
   try {
      const token = req.headers["x-access-token"];

      console.log(token);

      if (!token) return res.status(403).json({
         message: 'No token provided'
      });

      const decode = jwt.verify(token, config.SECRET);
      req.userId = decode.id;

      const user = await User.findById(decode.id, {
         password: 0
      });
      
      if (!user) return res.status(404).json({
         message: 'no user found'
      });


      console.log(decode);
      next();
   } catch (error) {

      res.status(401).json({
         message: "Unauthorized"
      })
   }

}

export const isModerador = async (req, res, next) => {
   const roles = await validateRole(req.userId);

   for (const role in roles) {
      if(roles[role].name === "moderador") {
         next();
         return;
      }
   }

   return res.status(403).json({message: "Require moderador role"});
}
export const isAdmin = async (req, res, next) => {
   const roles = await validateRole(req.userId);

   for (const role in roles) {
      if(roles[role].name === "admin") {
         next();
         return;
      }
   }

   return res.status(403).json({message: "Require Admin role"});
}