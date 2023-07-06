import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const profile = uploadPhoto();
  const user = createUser;
  return Promise.all([profile, user])
    .then((results) => {
      console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}	
