const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const noticeRoutes = require("./routes/noticeRoutes");
const resultRoutes = require("./routes/resultRoutes");
const timetableRoutes = require("./routes/timetableRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const attendanceLogRoutes = require("./routes/attendanceLogRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const adminRoutes = require("./routes/adminRoutes");


const app = express();



// Connect MongoDB
connectDB();


// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/result", resultRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/assignment", assignmentRoutes);
app.use("/api/attendance-logs", attendanceLogRoutes);
app.use(
    "/api/faculty",
    facultyRoutes
);
app.use(
    "/api/subjects",
    subjectRoutes
);
app.use("/api/schedule", scheduleRoutes);

app.use(
    "/api/admin",
    adminRoutes
);

// Test Route
app.get("/", (req, res) => {

    res.send("SEC Student Portal Backend Server Running");

});


// Port
const PORT = process.env.PORT || 5000;


// Start Server
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});

