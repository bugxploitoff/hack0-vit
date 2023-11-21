// pages/api/[...params].js

export default async function handler(req, res) {
    const { params } = req.query;
    const [action, email, token] = params;
  
    if (action === 'verify') {  
      if (email && token) {
        try {
          const response = await fetch('https://api.pwnme.in/v2/validateuser.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email , token : token }),
          });

          if (response.ok) {
            const responseData = await response.json();
            if (responseData.status === 'success') {
              res.redirect(301, '/email?type=success');
            } else {
              res.redirect(301, '/email?type=error');
            }
          } else {
            res.redirect(301, '/error');
          }
        } catch (error) {
          res.redirect(301, '/error');
        }
      } else {
        res.status(400).json({ error: 'Invalid email or token' });
      }
    } else {
      res.status(404).json({ error: 'Route not found' });
    }
  }
  