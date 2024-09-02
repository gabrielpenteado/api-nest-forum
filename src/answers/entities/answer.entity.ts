import { Question } from 'src/questions/entities/question.entity';
import { User } from 'src/user/entities/user.entity';

export class Answer {
  id: number;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  questionId: number;
  user: User;
  question: Question;
}
