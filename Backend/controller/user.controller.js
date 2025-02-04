import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        
        // Corrected findOne (capital O)
        const user = await User.findOne({ email });
        
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }
        const hashPassword=await bcryptjs.hash(password,10);
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        });

        await createdUser.save();

        // Corrected 'messege' to 'json' and 'message' spelling
        res.status(200).json({ message: "User Created Successfully",
            user:{
                _id:createdUser.id,
                fullname:createdUser.fullname,
                email:createdUser.email,

            }
         });
        
    } catch (error) {
        // Corrected 'messege' to 'message'
        console.log("Error: " + error.message);
        
        // Corrected 'messege' to 'json' and 'message' spelling
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Check if user exists
      const user = await User.findOne({ email });
  
      // If user doesn't exist, return error
      if (!user) {
        return res.status(400).json({ message: "Invalid Username or Password" });
      }
  
      // Compare passwords
      const isMatch = await bcryptjs.compare(password, user.password);
  
      // If password doesn't match, return error
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Username or Password" });
      }
  
      // Successful login
      return res.status(200).json({
        message: "Login Successful",
        user: {
          id: user.id,
          fullname: user.fullname,
          email: user.email
        }
      });
  
    } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  