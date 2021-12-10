import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users')
.doc('4K9tMEtvQ5JVgrEUxbWi')
.collection('cartItems')
.doc('LkHhvgarUFL8Z5P1r0cE');

// The above query can also be written as:
firestore.doc('/users/4K9tMEtvQ5JVgrEUxbWi/cartItems/LkHhvgarUFL8Z5P1r0cE');

// To get collection items
firestore.collection('/users/4K9tMEtvQ5JVgrEUxbWi/cartItems');