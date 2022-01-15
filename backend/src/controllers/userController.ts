import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/userModel";
import Student from "../models/studentModel";

function generateToken(params = {}){
    return jsonwebtoken.sign(params, process.env.privateKey,{
        expiresIn: 86400,
        algorithm: "RS256"
    });
}

module.exports = {
    async createUser (req: any, res: any){
        try{
            let { 
                username,
                email,
                password,
                usertype,
                creatorEmail
            } = req.body;

            // Verifica se os campos estão preenchidos
            if(!username || !email || !password || !usertype){
                return res.status(400).json({
                    error: "Preencha todos os campos."
                });
            }

            // O primeiro usuario é o admin
            let user = await User.findOne();
            if(!user){
                usertype = "admin";
            }

            // O email precisa ser unico
            user = await User.findOne({ email });
            if(user){
                return res.status(400).json({
                    error: "Usuario já cadastrado."
                });
            }

            // Apenas o admin pode criar professores
            if(usertype == "teacher"){
                user = await User.findOne({creatorEmail});

                if(user.usertype != "admin"){
                    return res.status(400).json({
                        error: "Não autorizado."
                    });
                }else{
                    // Cria o usuario
                    user = new User({
                        username,
                        email,
                        password,
                        usertype
                    });

                    const userCreated = await user.save()
                }
            }else{
                // Cria o usuario
                user = await User.create({
                    username,
                    email,
                    password,
                    usertype
                });

                // Cria o estudante
                await Student.create({
                    user_id: user._id
                })
            }

            return res.json({
                status: 200,
                user
            });
        
        }catch(error){
            console.log("Error: " + error);
            return res.status(401).json({
                error: error.message
            });
        }
    },

    async login(req: any, res: any){
        const {email,password} = req.body;
    
        const user = await User.findOne ({email}).select('+passwordword');
    
        if(!user)
            return res.status(400).json({message: 'Usuario não cadastrado'});
    
        if(!await bcrypt.compare(password, user.password))
            return res.status(400).json({message: 'Senha incorreta'});
    
        res.send({
            user,
            token: generateToken( {id: user.id }),
        });
    }
}