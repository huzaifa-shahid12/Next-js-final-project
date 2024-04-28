import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRIeGtYsnFx2jUzOkRtHvfNDykyKOEZRc",
  authDomain: "social-media-app-3d097.firebaseapp.com",
  projectId: "social-media-app-3d097",
  storageBucket: "social-media-app-3d097.appspot.com",
  messagingSenderId: "613373344799",
  appId: "1:613373344799:web:71b3e1f26fa740958ea92a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const fbAuthProvider = new FacebookAuthProvider();

export async function register(userInfo) {
  try {
    const { firstName, lastName, username, email, gender, password } = userInfo;

    await createUserWithEmailAndPassword(auth, email, password);

    await addDoc(collection(db, "users"), {
      firstName,
      lastName,
      username,
      email,
      gender,
    });

    console.log("Registration successful");
    alert("Successfully registered!");
  } catch (error) {
    console.error("Error during registration:", error);
    alert(error.message);
  }
}

export async function login(userInfo) {
  try {
    const { email, password } = userInfo;

    await signInWithEmailAndPassword(auth, email, password);

    console.log("Login successful");
    alert("Logged In Successfully");
  } catch (error) {
    console.error("Login error:", error);
    alert(error.message);
  }
}

export async function PostAds(itemInfo) {
  console.log(itemInfo);
  try {
    const { image, title, description } = itemInfo;
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const imgUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, "userItem"), {
      description: description,
      image: imgUrl,
      title: title,
    });
    alert("Post successfully!");
  } catch (e) {
    alert(e.message);
  }
}

export const getApiData = async () => {
  const postAds = [];
  const querySnapshot = await getDocs(collection(db, "userItem"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const dat = doc.data();
    dat.id = doc.id;
    postAds.push(dat);
  });
  return postAds;
};

export const ProfileData = async () => {
  const postAds = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const dat = doc.data();
    dat.id = doc.id;
    postAds.push(dat);
  });
  return postAds;
};
ProfileData();

export async function updateData(e, img) {
  console.log("e:", e);
  console.log("img:", img);
  const userd = e[0];
  try {
    const storageRef = ref(storage, `profile image /${img.name}`);
    await uploadBytes(storageRef, img);
    const Url = await getDownloadURL(storageRef);
    console.log(Url);
    await addDoc(collection(db, "users"), {
      firstname: userd.firstname,
      lastname: userd.lastname,
      age: userd.age,
      email: userd.email,
      password: userd.password,
      image: Url,
    });

    const ver = await deleteDoc(doc(db, "users", userd.id));
    console.log("del", ver);

    alert("Profile is Updated . ");
  } catch (e) {
    console.log(e.message);
  }
}
export const FacebookAuth = async () => {
  const fbAuth = signInWithPopup(auth, fbAuthProvider);
  return fbAuth;
};
