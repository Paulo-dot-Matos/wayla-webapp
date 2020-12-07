const admin = require("firebase-admin");
const serviceAccount = require("../wayala-1e8f4-firebase-adminsdk-zm60l-4bd86e0fcb.json")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://wayala-1e8f4.firebaseio.com"
})

const db = admin.firestore();
const collection = 'users'


exports.db=db;
exports.collection=collection;
