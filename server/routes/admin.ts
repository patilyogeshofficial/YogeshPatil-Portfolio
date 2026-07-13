import { RequestHandler } from "express";
import { contactStorage } from "../services/contactStorage";

export const getContactSubmissions: RequestHandler = async (req, res) => {
  try {
    const submissions = contactStorage.getAllSubmissions();
    
    res.json({
      success: true,
      data: {
        submissions,
        total: submissions.length,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact submissions",
    });
  }
};

export const getContactSubmissionById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const submission = contactStorage.getSubmissionById(id);
    
    if (!submission) {
      return res.status(404).json({
        success: false,
        message: "Contact submission not found",
      });
    }
    
    res.json({
      success: true,
      data: submission,
    });
  } catch (error) {
    console.error("Error fetching contact submission:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact submission",
    });
  }
};
