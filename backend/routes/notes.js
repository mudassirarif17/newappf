// this will part of lec 44
const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//Route1. Fetch All Notes using: GET "/api/notes/fetchallnotes"    .login required
// This will part of lec 52
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route2. Add a new Notes using: Post "/api/notes/addnotes"    .login required
// This will part of lec 52
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description at least must be 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are errors return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//Route3. Updating an existing Notes using: Put "/api/notes/updatenotes"    .login required
// This will part of lec 53
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  try {
    // here I am using destructuring for getting notes detail
    const { title, description, tag } = req.body;
    //Craeate a newNote Object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    // ye jo params hai ye rout three me jo hum id send kr rhe hain wo hai
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({note});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Route4. Deleting  an existing Notes using: Delete "/api/notes/deletenotes"    .login required
// This will part of lec 54
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be deleted and delete it
    // ye jo params hai ye rout three me jo hum id send kr rhe hain wo hai
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user own this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
     note = await Note.findByIdAndDelete(req.params.id);
    res.json({ 'Success': "Note has been delete it", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// for exporting this to other part of app
module.exports = router;
