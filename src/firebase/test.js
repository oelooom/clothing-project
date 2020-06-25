import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

// Melihat spesifik item didatabase
firestore.collection('users').doc('GdM5wXys6FS2bjtQKN4r')
    .collection('cartItems').doc('Cwhdz21irhtzIB9v0d2g')

// Cara lain Jika ingin melihat spesifik item didatabse
firestore.doc('users/GdM5wXys6FS2bjtQKN4r/cartItems/Cwhdz21irhtzIB9v0d2g');

// Cara melihat koleksi item didatabse (araay of items / Kumulan dari items);
firestore.collection('users/GdM5wXys6FS2bjtQKN4r/cartItems/')