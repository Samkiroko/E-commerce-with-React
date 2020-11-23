import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    // adding logical or to make sure the code run on development test
    process.env.JWT_SECRET || 'SAM2688',
    {
      expiresIn: '30d',
    }
  );
};
