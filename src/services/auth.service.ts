import { AppDataSource } from '../config/mysql';
import {hashPassword, compareHash} from '../utils/handlerHash'
import { User } from '../entities/user.entitie';
import { UserDTO } from '../dto/user.dto';

const userRepository = AppDataSource.getRepository(User);
  
const getUserByEmail = async (email:string) => {
    const user = await userRepository.findOne({where: {email}, relations:["spents"]});
    if (!user) throw new Error("Doesn't Exist");
    return user;
};

const loginAndVerifyPassword = async (email:string, password:string)=>{
    const user = await getUserByEmail(email);
    if(await compareHash(password, user.password)){
      return user;
    }
    throw new Error("Invalid password")
  }
  
  const createUser = async (attributes:UserDTO) => {
      attributes.password = await hashPassword(attributes.password)
      const user = userRepository.create(attributes);
      await userRepository.save(user);
      return user;
  };

  const updateUser = async(id:number, attributes:object)=>{
    const user = await userRepository.update({id}, attributes);
    return user;
  }


export default {
    getUserByEmail,
    loginAndVerifyPassword,
    createUser,
    updateUser
}