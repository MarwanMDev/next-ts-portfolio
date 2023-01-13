interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  name: string;
  backgroundInformation: string;
  role: string;
  address: string;
  email: string;
  phoneNumber: string;
  profilePic: Image;
  heroImage: Image;
}

export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  titles: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  titles: string;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorking: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: 'project';
  titles: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technology: Technology[];
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
