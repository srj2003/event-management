const Attendee = require("../models/Attendee");
const Event = require("../models/Event");

// RSVP for Event
exports.rsvp = async (req, res) => {
  const { eventId } = req.params;
  try {
    const attendee = await Attendee.create({
      user: req.user._id,
      event: eventId,
      rsvp: true,
    });
    res.status(201).json(attendee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get Attendees for Event
exports.getAttendees = async (req, res) => {
  const { eventId } = req.params;
  try {
    const attendees = await Attendee.find({ event: eventId }).populate(
      "user",
      "name email"
    );
    res.json(attendees);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
