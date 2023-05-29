import bugtrackerImage from "../images/bugtracker.png";
import fitnessImage from "../images/fitnesstracker.png";
import tictactoeImage from "../images/tictactoe.png";
import daterbaseImage from "../images/Screenshot 2023-05-29 133507.png";

const projects = [
  {
    number: 1,
    name: "Bugtracker",
    description:
      "Lorem Ipsum is simply dummy text of the printing language and it really useful when you are tyring to develop website and you need some dummy text for example when you are trying to see how something would look if it had some text kinda like what I'm doing now and why Im writing all this gibberish",
    img: bugtrackerImage,
    skills: ["React", "Django", "Heroku", "Django REST framework"],
    url: "http://bugtrackeradmin.herokuapp.com/",
    github: "https://github.com/maxim-pre/Bugtracker-frontend",
  },
  {
    number: 2,
    name: "Fitness Tracker",
    description:
      "Lorem Ipsum is simply dummy text of the printing language and it really useful when you are tyring to develop website and you need some dummy text for example when you are trying to see how something would look if it had some text kinda like what I'm doing now and why Im writing all this gibberish",
    img: fitnessImage,
    skills: ["React"],
    url: "https://fitness-tracker-react.herokuapp.com/",
    github: "https://github.com/maxim-pre/fitness-tracker",
  },
  {
    number: 3,
    name: "DaterBase",
    description:
      "Lorem Ipsum is simply dummy text of the printing language and it really useful when you are tyring to develop website and you need some dummy text for example when you are trying to see how something would look if it had some text kinda like what I'm doing now and why Im writing all this gibberish",
    img: daterbaseImage,
    skills: ["React"],
    url: "https://daterbase.netlify.app/",
    github: "https://github.com/maxim-pre/Date-abase-backend",
  },
  {
    number: 4,
    name: "TicTacToe",
    description:
      "Lorem Ipsum is simply dummy text of the printing language and it really useful when you are tyring to develop website and you need some dummy text for example when you are trying to see how something would look if it had some text kinda like what I'm doing now and why Im writing all this gibberish",
    img: tictactoeImage,
    skills: ["React"],
    url: "https://maxim-pre.github.io/tictactoe/",
    github: "https://github.com/maxim-pre/tictactoe",
  },
];

export { projects };
