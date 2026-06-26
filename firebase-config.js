import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    set,
    get,
    onValue,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCw1FG5Eg7uN7jv-GyHOXr5badaGFuWEJY",
    authDomain: "payment-manager-bbc1c.firebaseapp.com",
    databaseURL: "https://payment-manager-bbc1c-default-rtdb.firebaseio.com",
    projectId: "payment-manager-bbc1c",
    storageBucket: "payment-manager-bbc1c.firebasestorage.app",
    messagingSenderId: "705089160591",
    appId: "1:705089160591:web:93c133a74c4b1c4f4e77fa"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {
    db,
    ref,
    push,
    set,
    get,
    onValue,
    update,
    remove
};