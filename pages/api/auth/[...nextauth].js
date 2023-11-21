import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import Cookies from 'js-cookie';

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'user:email',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      scope: 'https://www.googleapis.com/auth/userinfo.email',
    }),
    Credentials({
      // ... other configuration
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const response = await fetch('https://api.pwnme.in/v2/login.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            if (responseData.status === 'success') {
              const { email } = responseData;
            return Promise.resolve({
              email
            });
            } else {
              return Promise.resolve(null); // Reject if login failed
            }
          } else {
            return Promise.resolve(null); // Reject for non-OK responses
          }
        } catch (error) {
          console.error('Login error:', error);
          return Promise.resolve(null); // Resolve null for any errors
        }
      },
    }),
    
    
    

    // Add other providers if needed
  ],
  callbacks: {
    async redirect(url, baseUrl) {
      return '/setprofile'; // Specify your default callback URL here
    },
    async signIn(user, account, profile) {
      const userEmail = user.user.email || (profile ? profile.profile.email : null);
      if (userEmail) {
        try {
          const response = await fetch('https://api.pwnme.in/v2/getuser.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail }),
          });

          if (response.ok) {
            const responseData = await response.json();
            if (responseData.status === 'Success') {
    
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
          return false;
        }
      }

      return false;
    },
  },
});
