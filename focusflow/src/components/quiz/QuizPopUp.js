import React, { useState } from "react"; // Import React and useState
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
  Button,
  Typography,
  Box,
} from "@mui/material"; // Import Material UI components
import "./quiz.css"; // Import styles
import { useSelector } from "react-redux"; // Import useSelector for Redux state
import { getUser } from "../../redux/userSlice"; // Import selector to get user data
import { showToast } from "../toast/Toast"; // Import toast notification function
import supabase from "../../config/SupabaseClient"; // Import Supabase client

const QuizPopUp = ({ open, onClose }) => {
  // State for mood, energy, ambition, and well-being
  const [mood, setMood] = useState(1);
  const [energy, setEnergy] = useState(1);
  const [ambition, setAmbition] = useState(1);
  const [wellbeing, setWellBeing] = useState(1);
  const user = useSelector(getUser); // Get user data from Redux

  const createdAt = new Date().toISOString(); // Get current date and time

  const submit = async () => {
    try {
      // Create the check-in object
      const checkinObj = {
        mood: mood,
        energy: energy,
        ambition: ambition,
        wellbeing: wellbeing,
        user_id: user.id,
        created: createdAt,
      };

      // Insert the object into the 'DailyCheckin' table in Supabase
      const { data, error } = await supabase
        .from("DailyCheckin")
        .insert([checkinObj]);

      if (error) {
        throw error; // Handle error
      }

      if (data) {
        console.log("CheckinRes", data); // Log success
        showToast("Success", "success"); // Show success toast
      }
    } catch (error) {
      console.log("Checkin quiz submission failed:", error.message); // Log error
    }

    console.log({ createdAt, mood, energy, ambition, wellbeing }); // Log submitted data
    onClose(); // Close the modal
  };

  return (
    <Dialog
      open={open} // Modal open state
      onClose={onClose} // Close function
      fullWidth
      maxWidth="sm"
      PaperProps={{
        className: "quiz-dialog", // Custom class for dialog
      }}
    >
      <DialogTitle>
        <Typography variant="h5" className="quiz-title">
          Daily Check-in Quiz
        </Typography>{" "}
        {/* Title */}
        <Typography variant="subtitle1" className="quiz-subtitle">
          Rate the following on a scale of 1 to 5
        </Typography>{" "}
        {/* Subtitle */}
      </DialogTitle>

      <DialogContent>
        <Box className="slider-container">
          {/* Mood Slider */}
          <Box className="slider-item">
            <Typography gutterBottom>
              How would you rate your current mood: {mood}
            </Typography>
            <Slider
              value={mood}
              onChange={(e, newValue) => setMood(newValue)}
              aria-labelledby="mood-slider"
              min={1}
              max={5}
              step={1}
              valueLabelDisplay="on"
              className="custom-slider"
            />
          </Box>

          {/* Energy Slider */}
          <Box className="slider-item">
            <Typography gutterBottom>
              How would you rate your current energy level: {energy}
            </Typography>
            <Slider
              value={energy}
              onChange={(e, newValue) => setEnergy(newValue)}
              aria-labelledby="energy-slider"
              min={1}
              max={5}
              step={1}
              valueLabelDisplay="on"
              className="custom-slider"
            />
          </Box>

          {/* Ambition Slider */}
          <Box className="slider-item">
            <Typography gutterBottom>
              How ambitious are you today: {ambition}
            </Typography>
            <Slider
              value={ambition}
              onChange={(e, newValue) => setAmbition(newValue)}
              aria-labelledby="ambition-slider"
              min={1}
              max={5}
              step={1}
              valueLabelDisplay="on"
              className="custom-slider"
            />
          </Box>

          {/* Well-being Slider */}
          <Box className="slider-item">
            <Typography gutterBottom>
              How would you rate your overall well-being: {wellbeing}
            </Typography>
            <Slider
              value={wellbeing}
              onChange={(e, newValue) => setWellBeing(newValue)}
              aria-labelledby="wellbeing-slider"
              min={1}
              max={5}
              step={1}
              valueLabelDisplay="on"
              className="custom-slider"
            />
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ borderColor: "#4CAF50", color: "#4CAF50" }}
        >
          Cancel {/* Cancel button */}
        </Button>
        <Button
          onClick={submit}
          variant="contained"
          sx={{ backgroundColor: "#4CAF50", color: "#fff" }}
        >
          Submit {/* Submit button */}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuizPopUp; // Export the QuizPopUp component
