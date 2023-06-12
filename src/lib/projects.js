import bugtrackerImage from "../images/bugtracker.png";
import fitnessImage from "../images/fitnesstracker.png";
import tictactoeImage from "../images/tictactoe.png";
import daterbaseImage from "../images/Screenshot 2023-05-29 133507.png";
import jobTrackerImage from "../images/jobTracker.png";

const projects = [
  {
    number: 1,
    name: "Bugtracker",
    description:
      "Bug tracking software to help engineers track and manage software defects and bugs throughout the software development lifecycle.",
    img: bugtrackerImage,
    personal:
      "This was built in three months before my bootcamp with General Assembly, and was an amazing learning experience especially with React and Django",
    skills: ["React", "Django", "Heroku", "MySQL"],
    url: "http://bugtrackeradmin.herokuapp.com/",
    github: "https://github.com/maxim-pre/Bugtracker-frontend",
  },
  {
    number: 2,
    name: "Job Tracker",
    description:
      "An application designed to help people organise, track, and manage their job applications throughout the hiring process. It provides a centraized platform to keep all job-related information orgnised and easily accessible.",
    img: jobTrackerImage,
    personal:
      "This is a Full-Stack application that uses a Rails api with React Front-end and was built during the final two weeks of my Software Engineering bootcamp with General Assembly.",
    skills: ["React", "Rails", "Heroku", "postgreSQL", "tailwind"],
    url: "https://job-tracer.netlify.app/",
    github: "https://github.com/maxim-pre/job-tracker-front",
  },
  {
    number: 3,
    name: "Fitness Tracker",
    description:
      "A fitness tracking software for individuals to keep track of their progress in the gym. Log the sets, reps and weight for each exercise and save your workouts for future reference. You can also look up any exercises your interested in to see a description and a diagram to see how they're performed ",

    img: fitnessImage,
    personal:
      "This was built in 5 days during my software engineering bootcamp and I gained experience with responsive design and tailwind css",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    url: "https://fitness-tracker-react.herokuapp.com/",
    github: "https://github.com/maxim-pre/fitness-tracker",
  },
  {
    number: 4,
    name: "DaterBase",
    description:
      "Daterbase Is a dating app for techies. Create your profile and search for other techies that match your preferences.",
    personal:
      "This was built in one week with three other engineers during my bootcamp. I gained valuable experience working in a team and I learned loads about git workflow ",
    img: daterbaseImage,
    skills: ["React", "Express", "MongoDB", "Node"],
    url: "https://daterbase.netlify.app/",
    github: "https://github.com/maxim-pre/Date-abase-backend",
  },
  {
    number: 5,
    name: "TicTacToe",
    description:
      "The classic tictactoe game where two players take turns marking and X or an O on a 3x3 grid aiming to create a stright line vertically, horizontally or diagonally",
    personal:
      "This was a fun project to build and I especially enjoyed coding up the computer opponent alogorithm",
    img: tictactoeImage,
    skills: ["Javascript", "HTML", "CSS"],
    url: "https://maxim-pre.github.io/tictactoe/",
    github: "https://github.com/maxim-pre/tictactoe",
  },
];

export { projects };
