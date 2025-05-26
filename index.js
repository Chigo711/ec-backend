// // const express = require("express");
// // const cors = require("cors");
// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // app.use(cors());
// // app.use(express.json());
// // app.use("/images", express.static("images"));

// // let candidates = [
// //   { id: 1, name: "Immaculata Emmanuel Effiong", role: "SRC Treasurer", img: "immaculata.jpg" },
// //   { id: 2, name: "Elera Obari", role: "SRC Vice President", img: "elera.jpg" },
// //   { id: 3, name: "Tooshar Sauntoo", role: "ALU Alive SRC Committee Head", img: "tooshar.jpg" },
// //   { id: 4, name: "Umar Kamani", role: "SRC President", img: "umar.jpg" },
// //   { id: 5, name: "Tako Nellyvine MIZERO", role: "SRC Treasurer", img: "nelly.jpeg" },
// //   { id: 6, name: "Kevin Ikuzwe", role: "SRC Clubs and Societies Committee Head", img: "kelvin.jpg" },
// //   { id: 7, name: "Chisom Louisa Obueze", role: "SRC Vice President", img: "chisom.jpg" },
// //   { id: 8, name: "Olivier Ishimwe", role: "SRC Social Transformation Committee Head", img: "ishimweO.jpeg" },
// //   { id: 9, name: "Moulika Mugeni", role: "ALU Alive SRC Committee Head", img: "moulika.jpeg" },
// //   { id: 10, name: "Farhaan Khuroolah", role: "SRC Clubs and Societies Committee Head", img: "farhaan.jpg" },
// //   { id: 11, name: "Kimunila Zhakata", role: "SRC Clubs and Societies Committee Head", img: "zahkata.JPG" },
// //   { id: 12, name: "Yvette Uwase Ishimwe", role: "SRC Clubs and Societies Committee Head", img: "yvette.jpg" }
// // ];

// // let nominations = [];

// // app.get("/candidates", (req, res) => {
// //   res.json(candidates);
// // });

// // app.post("/nominate", (req, res) => {
// //   const { studentId, candidateId } = req.body;
// //   const candidate = candidates.find(c => c.id === candidateId);

// //   if (!candidate) return res.status(404).json({ error: "Candidate not found" });

// //   const alreadyNominated = nominations.find(
// //     n => n.studentId === studentId && n.role === candidate.role
// //   );

// //   if (alreadyNominated) {
// //     return res.status(400).json({ error: `Already nominated for ${candidate.role}` });
// //   }

// //   nominations.push({ studentId, candidateId, role: candidate.role });
// //   res.json({ message: "Nomination successful" });
// // });

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const cors = require("cors");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use("/images", express.static("images"));

// let candidates = [
//   { id: 1, name: "Immaculata Emmanuel Effiong", role: "SRC Treasurer", img: "immaculata.jpg" },
//   { id: 2, name: "Elera Obari", role: "SRC Vice President", img: "elera.jpg" },
//   { id: 3, name: "Tooshar Sauntoo", role: "ALU Alive SRC Committee Head", img: "tooshar.jpg" },
//   { id: 4, name: "Umar Kamani", role: "SRC President", img: "umar.jpg" },
//   { id: 5, name: "Tako Nellyvine MIZERO", role: "SRC Treasurer", img: "nelly.jpeg" },
//   { id: 6, name: "Kevin Ikuzwe", role: "SRC Clubs and Societies Committee Head", img: "kelvin.jpg" },
//   { id: 7, name: "Chisom Louisa Obueze", role: "SRC Vice President", img: "chisom.jpg" },
//   { id: 8, name: "Olivier Ishimwe", role: "SRC Social Transformation Committee Head", img: "ishimweO.jpeg" },
//   { id: 9, name: "Moulika Mugeni", role: "ALU Alive SRC Committee Head", img: "moulika.jpeg" },
//   { id: 10, name: "Farhaan Khuroolah", role: "SRC Clubs and Societies Committee Head", img: "farhaan.jpg" },
//   { id: 11, name: "Kimunila Zhakata", role: "SRC Clubs and Societies Committee Head", img: "zahkata.JPG" },
//   { id: 12, name: "Yvette Uwase Ishimwe", role: "SRC Clubs and Societies Committee Head", img: "yvette.jpg" }
// ];

// let nominations = [];

// // Get all candidates
// app.get("/candidates", (req, res) => {
//   res.json(candidates);
// });

// // Handle nomination
// app.post("/nominate", (req, res) => {
//   const { studentId, candidateId } = req.body;

//   if (!studentId || typeof studentId !== "string" || studentId.trim() === "") {
//     return res.status(400).json({ error: "Invalid or missing studentId" });
//   }

//   if (!candidateId || typeof candidateId !== "number") {
//     return res.status(400).json({ error: "Invalid or missing candidateId" });
//   }

//   const candidate = candidates.find(c => c.id === candidateId);
//   if (!candidate) {
//     return res.status(404).json({ error: "Candidate not found" });
//   }

//   const alreadyNominated = nominations.find(
//     n => n.studentId === studentId && n.role === candidate.role
//   );

//   if (alreadyNominated) {
//     return res.status(400).json({
//       error: `Student with ID ${studentId} has already nominated someone for the role of ${candidate.role}`
//     });
//   }

//   nominations.push({ studentId, candidateId, role: candidate.role });
//   res.json({ message: "Nomination successful" });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// backend/index.js or server.js

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use("/images", express.static("images"));

// let candidates = [
//   { id: 1, name: "Immaculata Emmanuel Effiong", role: "SRC Treasurer", img: "immaculata.jpg" },
//   { id: 2, name: "Elera Obari", role: "SRC Vice President", img: "elera.jpg" },
// //   { id: 3, name: "Tooshar Sauntoo", role: "ALU Alive SRC Committee Head", img: "tooshar.jpg" },
//   { id: 4, name: "Umar Kamani", role: "SRC President", img: "umar.jpg" },
//   { id: 5, name: "Tako Nellyvine MIZERO", role: "SRC Treasurer", img: "nelly.jpeg" },
// //   { id: 6, name: "Kevin Ikuzwe", role: "SRC Clubs and Societies Committee Head", img: "kelvin.jpg" },
//   { id: 7, name: "Chisom Louisa Obueze", role: "SRC Vice President", img: "chisom.jpg" },
//   { id: 8, name: "Olivier Ishimwe", role: "SRC Social Transformation Committee Head", img: "ishimweO.jpeg" },
//   { id: 9, name: "Moulika Mugeni", role: "ALU Alive SRC Committee Head", img: "moulika.jpeg" },
//   { id: 10, name: "Farhaan Khuroolah", role: "SRC Clubs and Societies Committee Head", img: "farhaan.jpg" },
//   { id: 11, name: "Kimunila Zhakata", role: "SRC Clubs and Societies Committee Head", img: "zahkata.JPG" },
//   { id: 12, name: "Yvette Uwase Ishimwe", role: "SRC Clubs and Societies Committee Head", img: "yvette.jpg" },
//   { id: 13, name: "Lisette Mukazi", role: "SRC Academic Affairs Committee Head", img: "lisette.jpg" },
//   { id: 14, name: "Yahya Bouhaik", role: "SRC Present", img: "yahya.jpg" },
//   { id: 15, name: "Janique Maduray", role: "SRC Secretary", img: "janique.jpg" },
// ];

// let nominations = []; // { studentEmail, candidateId, role }

// app.get("/candidates", (req, res) => {
//   res.json(candidates);
// });

// app.post("/nominate", (req, res) => {
//   const { studentEmail, candidateId } = req.body;

//   // Check if email ends with @alustudent.com
//   if (!studentEmail || !studentEmail.endsWith("alustudent.com")) {
//     return res.status(400).json({ error: "Only @alustudent.com emails are allowed" });
//   }

//   // Find candidate
//   const candidate = candidates.find(c => c.id === candidateId);
//   if (!candidate) {
//     return res.status(404).json({ error: "Candidate not found" });
//   }

//   // Check if student has already nominated someone for this role
//   const alreadyNominated = nominations.find(
//     n => n.studentEmail === studentEmail && n.role === candidate.role
//   );

//   if (alreadyNominated) {
//     return res.status(400).json({
//       error: `You have already nominated someone for the role: ${candidate.role}`
//     });
//   }

//   nominations.push({
//     studentEmail,
//     candidateId,
//     role: candidate.role
//   });

//   return res.json({ message: "Nomination successful" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

let candidates = [
  { id: 1, name: "Immaculata Emmanuel Effiong", role: "SRC Treasurer", img: "immaculata.jpg" },
  { id: 2, name: "Elera Obari", role: "SRC Vice President", img: "elera.jpg" },
  { id: 4, name: "Umar Kamani", role: "SRC President", img: "umar.jpg" },
  { id: 5, name: "Tako Nellyvine MIZERO", role: "SRC Treasurer", img: "nelly.jpeg" },
  { id: 7, name: "Chisom Louisa Obueze", role: "SRC Vice President", img: "chisom.jpg" },
  { id: 8, name: "Olivier Ishimwe", role: "SRC Social Transformation Committee Head", img: "ishimweO.jpeg" },
  { id: 9, name: "Moulika Mugeni", role: "ALU Alive SRC Committee Head", img: "moulika.jpeg" },
  { id: 10, name: "Farhaan Khuroolah", role: "SRC Clubs and Societies Committee Head", img: "farhaan.jpg" },
  { id: 11, name: "Kimunila Zhakata", role: "SRC Clubs and Societies Committee Head", img: "zahkata.JPG" },
  { id: 12, name: "Yvette Uwase Ishimwe", role: "SRC Clubs and Societies Committee Head", img: "yvette.jpg" },
  { id: 13, name: "Lisette Mukazi", role: "SRC Academic Affairs Committee Head", img: "lisette.jpg" },
  { id: 14, name: "Yahya Bouhaik", role: "SRC President", img: "yahya.jpg" },
  { id: 15, name: "Janique Maduray", role: "SRC Secretary", img: "janique.jpg" },
];

let nominations = []; // Stores { studentEmail, candidateId, role }

// Get candidates
app.get("/candidates", (req, res) => {
  res.json(candidates);
});

// Nominate a candidate
app.post("/nominate", (req, res) => {
  const { studentEmail, candidateId } = req.body;

  // Ensure only students with @alustudent.com can nominate
  if (!studentEmail || !studentEmail.endsWith("@alustudent.com")) {
    return res.status(400).json({ error: "Only @alustudent.com emails are allowed" });
  }

  // Find the candidate
  const candidate = candidates.find(c => c.id === candidateId);
  if (!candidate) {
    return res.status(404).json({ error: "Candidate not found" });
  }

  // Check if the student has already nominated someone for this role
  const alreadyNominated = nominations.find(
    n => n.studentEmail === studentEmail && n.role === candidate.role
  );

  if (alreadyNominated) {
    return res.status(400).json({
      error: `You have already nominated someone for the role: ${candidate.role}`,
    });
  }

  // Save the nomination
  nominations.push({ studentEmail, candidateId, role: candidate.role });

  return res.json({ message: "Nomination successful" });
});

// Remove a nomination when the student changes their email
app.post("/reset", (req, res) => {
  const { studentEmail } = req.body;

  // Check if the email is valid
  if (!studentEmail || !studentEmail.endsWith("@alustudent.com")) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Remove previous nominations linked to this student email
  nominations = nominations.filter(n => n.studentEmail !== studentEmail);

  return res.json({ message: "Your nominations have been reset" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});