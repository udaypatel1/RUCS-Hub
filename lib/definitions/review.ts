export type Review = {
  reviewId?: string;
  userId?: string;
  courseId: string;
  bookUsefulness?: number;
  difficulty?: number;
  upvotes?: number;
  downvotes?: number;
  lastUpdated: Date;
  lectureQuality: number;
  piazzaCommunity?: number;
  professorId?: number;
  professorQuality?: number;
  projectDifficulty?: number;
  rating: number;
  review: string;
  semester: string;
  year: number;
  title: string;
  timestamp: Date;
  weeklyWorkload?: number;
};
