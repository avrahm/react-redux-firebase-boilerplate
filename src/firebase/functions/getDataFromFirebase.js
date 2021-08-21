/* eslint-disable import/prefer-default-export */
import { firebase } from '../config';
import { setLastSync } from '../../redux/actions/UserActions';

export const getDataFromFirebase = userID => async dispatch => {
    // create a connection to firebase and get look at the tasks collection for a document by userID
    const docRef = firebase.firestore().collection('tasks').doc(userID);
    docRef.onSnapshot(doc => {
        if (doc.exists) {
            // handle successfully getting data
            // to load the data to your reducer. use the method data() on the docRef
            try {
                dispatch(setLastSync(new Date()));
                // dispatch(loadData(doc.data()));
                // to handle the data, create a loadData action to handle any data
            } catch (error) {
                // handle no documents
                // doc.data() will be undefined in this case
                alert('No such document!');
            }
        }
    }, err => {
        console.log(`Encountered error: ${err}`);
    });
};
