import { celebrityProfile } from "../celebrityprofile/CelebrityProfile.model";
import { Movies } from "../movies/movies.model";
export class News {
    title: String;
    newsposter: String;
    description: String;
    movie: Movies;
    relatedcelebrity: celebrityProfile;
    isActive: boolean;
    comment: any;
    updatedAt: String;
  }
  