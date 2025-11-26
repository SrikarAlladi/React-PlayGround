import { PollDataProps } from "./types";

export const pollData: PollDataProps = {
  id: "1",
  title: "What is your favorite programming language?",
  totalVotes: 120,
  isMultiple: true,
  options: [
    { id: "1", title: "JavaScript", votes: 45 },
    { id: "2", title: "Python", votes: 30 },
    { id: "3", title: "Java", votes: 25 },
    { id: "4", title: "C#", votes: 20 },
  ],
};
