/**
 * Created by mak on 9/5/16.
 */
 export const user = {
  username: 'max',
  password: 'max'
};

export const auth = (req, res, next) => {
  const body = req.body;
  if (!body.username || !body.password) {
    res.status(400).end('Must provide username and password');
  }
  if (body.username !== user.username || body.password !== user.password) {
    res.status(401).end('Username or passwurd incorrect');
  }
  // Error: Can't set headers after they are sent.
  next();
};
