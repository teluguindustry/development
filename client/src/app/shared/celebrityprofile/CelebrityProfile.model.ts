import { category } from "../category/category.model";
export class CelebrityProfile {
    id: String;
    firstName: String;
    lastName: String;
    profilePic: File;
    dateOfBirth: String;
    height: String;
    biodata: String;
    education: String;
    spouse: String;
    category: category;
  }
  