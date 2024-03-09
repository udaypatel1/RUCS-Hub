import { Term } from "../definitions/course";
import { hashEmailAddress } from "../utils";

export const mockReviews: any[] = [
  {
    userId: hashEmailAddress("dsp209@scarletmail.rutgers.edu"),
    semester: Term.Spring,
    year: 2024,
    courseCode: 462,
    title: "Both fair and reasonable",
    content: "Machine learning is all about punishment",
    professorId: 18,
    rating: 10,
    difficultyRating: 4,
    professorQualityRating: 10,
    lectureRating: 10,
    bookRating: 4,
    piazzaRating: 2,
    workload: 12,
  },
  {
    userId: hashEmailAddress("dsp209@scarletmail.rutgers.edu"),
    semester: Term.Spring,
    year: 2024,
    courseCode: 462,
    title: "Where the fuck is bagel bot?",
    content: "No bagel?",
    professorId: 18,
    rating: 2,
    difficultyRating: 8,
    professorQualityRating: 7,
    lectureRating: 9,
    bookRating: 8,
    piazzaRating: 5,
    workload: 20,
  },
  {
    userId: hashEmailAddress("dsp209@scarletmail.rutgers.edu"),
    semester: Term.Fall,
    year: 2023,
    courseCode: 440,
    title: "Best course I've ever taken",
    content: "Introductory to florida man theory",
    professorId: 18,
    rating: 10,
  },
  {
    userId: hashEmailAddress("dsp209@scarletmail.rutgers.edu"),
    semester: Term.Spring,
    year: 2023,
    courseCode: 206,
    title: "A's were handed out like candy",
    content: "Dr. Cowan is truly a menance to society",
    professorId: 18,
    rating: 8,
  },
  {
    userId: hashEmailAddress("dsp209@scarletmail.rutgers.edu"),
    semester: Term.Summer,
    year: 2022,
    courseCode: 205,
    title: "Homework made me cry",
    content: "Homework was incredibly but ended up with an A",
    professorId: 18,
    rating: 9,
  },
];
