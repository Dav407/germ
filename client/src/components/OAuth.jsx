// import { Button } from 'flowbite-react'
// import { AiFillGoogleCircle } from 'react-icons/ai';
// import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
// import { app } from '../Firebase';
// import { useDispatch } from 'react-redux'
// import { signInSuccess } from '../redux/user/userSlice'
// import { useNavigate } from 'react-router-dom'

// export default function OAuth() {
//   const auth = getAuth(app)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const handleGoogleClick = async () =>{
//       const provider = new GoogleAuthProvider()
//       provider.setCustomParameters({ prompt: 'select_account' })
//       try {
//           const resultsFromGoogle = await signInWithPopup(auth, provider)
//           const res = await fetch('/api/auth/google', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                   name: resultsFromGoogle.user.displayName,
//                   email: resultsFromGoogle.user.email,
//                   googlePhotoUrl: resultsFromGoogle.user.photoURL,
//               }),
//               })
//           const data = await res.json()
//           if (res.ok){
//               dispatch(signInSuccess(data))
//               navigate('/')
//           }
//       } catch (error) {
//           console.log(error);
//       }
//   } 
//   return (
//     <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
//         <AiFillGoogleCircle  className='w-6 h-6 mr-2'/>
//         Continue With Google
//     </Button>
//   )
// }


import { Button, Spinner } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../Firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleClick = async () => {
    setLoading(true);
    setError(null);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      } else {
        setError(data.message || 'Authentication failed. Please try again.');
      }
    } catch (error) {
      setError('Authentication failed. Please try again.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button type="button" gradientDuoTone="pinkToOrange" outline onClick={handleGoogleClick} disabled={loading}>
        {loading ? (
          <>
            <Spinner size="sm" />
            <span className="pl-3">Loading...</span>
          </>
        ) : (
          <>
            <AiFillGoogleCircle className="w-6 h-6 mr-2" />
            Continue With Google
          </>
        )}
      </Button>
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error}
        </div>
      )}
    </>
  );
}
