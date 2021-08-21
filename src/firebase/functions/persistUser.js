/* eslint-disable import/prefer-default-export */
import { firebase } from '../config';
import { setUser } from '../../redux/actions/UserActions';
import { getDataFromFirebase } from './getDataFromFirebase';

export const persistUserFromFirebase = () => async dispatch => {
    // connect to firebase and retrieve the 'users' collection
    const usersRef = firebase.firestore().collection('users');
    // use the auth method to link into the app firebase service
    // onAuthStateChanged returns the currently signed in user
    const firebaseAuth = firebase.auth();
    return firebaseAuth.onAuthStateChanged(async user => {
        if (user) {
            try {
                await usersRef
                    .doc(user.uid)
                    .get()
                    .then(document => {
                        // handle persisted user data
                        // setLoading(false)
                        const userData = document.data();
                        dispatch(setUser(userData));
                        dispatch(getDataFromFirebase(user.uid));
                        return true;
                    })
                    .catch(error => {
                        // handle errors when getting persisted user
                        // setLoading(false)
                        alert(error);
                        return false;
                    });
            } catch (error) {
                // handle no persisted user
                // setLoading(false)
                alert('no user');
                return false;
            }
        }
    });
};
