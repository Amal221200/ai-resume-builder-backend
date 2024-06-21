import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
    description: '';
  };
  attributes: {
    universityName: Attribute.String;
    major: Attribute.String;
    degree: Attribute.String;
    description: Attribute.Text;
    startDate: Attribute.String;
    endDate: Attribute.String;
    currentlyStudying: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    startDate: Attribute.String;
    currentlyWorking: Attribute.Boolean & Attribute.DefaultTo<false>;
    endDate: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    companyName: Attribute.String;
    workSummary: Attribute.RichText;
  };
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'paint';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 5;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'skills.skills': SkillsSkills;
    }
  }
}
