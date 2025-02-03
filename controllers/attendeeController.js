const Attendee = require("../models/Attendee");

// RSVP for an event
exports.rsvp = async (req, res) => {
  const { eventId } = req.params; // Get eventId from URL
  const userId = req.user._id; // Get authenticated user's ID from middleware

  try {
    // Check if the user has already RSVP'd for this event
    const existingAttendee = await Attendee.findOne({
      user: userId,
      event: eventId,
    });

    if (existingAttendee) {
      return res
        .status(400)
        .json({ message: "You have already RSVP'd for this event" });
    }

    // Create a new attendee record
    const attendee = await Attendee.create({
      user: userId,
      event: eventId,
      rsvp: true,
    });
    res.status(201).json(attendee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get attendees for an event
exports.getAttendees = async (req, res) => {
  const { eventId } = req.params;

  try {
    // Find all attendees for the event and populate user details
    const attendees = await Attendee.find({ event: eventId }).populate(
      "user",
      "name email"
    );
    res.status(200).json(attendees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
