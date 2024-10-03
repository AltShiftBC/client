const jwtUtils = require('../utils/jwtUtils');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization || req.query.token;

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  const decoded = jwtUtils.verifyToken(token);

  if (!decoded) {
    return res.status(403).json({ error: 'Invalid token' });
  }

  req.user = decoded;
  next();
};

module.exports = verifyToken;
