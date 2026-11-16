// Approved copy (docs/portfolio-v1/plan.md, Phase 2 M0). Change only with the user's approval.
import type { Project } from "@/types/portfolio";

export const WORKS_HEADING = "Selected Works";

export const PROJECTS: Project[] = [
  {
    status: "shipped",
    slug: "clip-cuisine",
    title: "Clip Cuisine",
    summary:
      "Snap a photo of your ingredients and get back a list of what's in it, detected by a YOLO computer-vision model.",
    stack: ["Python", "Flask", "YOLO", "PostgreSQL"],
    problem:
      "Listing ingredients by hand from what's in front of you is tedious. Clip Cuisine turns a single photo into that list.",
    solution:
      "A Flask web app serves a pretrained YOLO model. You upload a photo in the browser, the backend runs detection and returns the ingredients it found. PostgreSQL keeps user accounts and each user's detection history.",
    challenges: [
      "Look-alike ingredients: similar-looking items, uneven lighting and cluttered backgrounds make detection less reliable.",
      "Running the model: keeping detection fast enough on modest hardware.",
    ],
    sourceUrl: "https://github.com/Nischeal/Ingredient_finder",
    facts: [
      { label: "Input", value: "Photo upload" },
      { label: "Model", value: "Pretrained YOLO" },
      { label: "Backend", value: "Flask (Python)" },
      { label: "Data", value: "PostgreSQL, users + history" },
      { label: "Output", value: "Ingredient list" },
    ],
  },
  {
    status: "shipped",
    slug: "gym-management-system",
    title: "Gym Management System",
    summary:
      "A Laravel platform for running a gym: members, membership plans, payments and attendance, with a portal for members.",
    stack: ["PHP", "Laravel", "MySQL"],
    problem:
      "Running a gym on paper or spreadsheets makes it hard to see who has paid, whose membership is about to expire and who has been coming in.",
    solution:
      "Staff manage members, plans, payments and attendance from an admin dashboard, recording check-ins as members arrive. Plans have durations and prices, and the system tracks expiry so renewals don't slip through. Members log in to their own portal.",
    challenges: [
      "Designing the MySQL schema for members, plans, subscriptions and renewals so each member's history stays intact across renewals.",
    ],
    sourceUrl: "https://github.com/Nischeal/Gym-Management-System",
    facts: [
      { label: "Users", value: "Admin dashboard + member portal" },
      { label: "Attendance", value: "Manual check-ins" },
      { label: "Plans", value: "Duration, price, expiry" },
      { label: "Payments", value: "Recorded" },
      { label: "Built on", value: "Laravel + MySQL" },
    ],
  },
  {
    status: "in-progress",
    slug: "final-year-project",
    label: "In progress",
    title: "Final-year project",
    summary: "My BCA final-year project is underway. Details soon.",
    facts: [
      { label: "Type", value: "BCA final-year project" },
      { label: "Status", value: "In progress" },
      { label: "Details", value: "Soon" },
    ],
  },
];
