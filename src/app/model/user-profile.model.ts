import { User } from './user.model';
import { UserData } from './userData.model';

export interface UserProfile {
  user: User;
  data: UserData;
}
