// Initialize Firebase
const app = initializeApp(firebaseConfig);

onAuthStateChanged(auth, (user) => {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.style.display = user ? "block" : "none";
});