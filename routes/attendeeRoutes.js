const express = require("express");
const { protect } = require("../middleware/attendeeMiddleware");
const { rsvp, getAttendees } = require("../controllers/attendeeController");
const router = express.Router();

router.post("/:eventId/rsvp", protect, rsvp);
router.get("/:eventId/attendees", protect, getAttendees);

module.exports = router;
