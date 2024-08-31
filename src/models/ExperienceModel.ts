import { Experience } from '../services/experience_svc';
import UserModel from './UserModel';

export default class ExperienceModel {
  private constructor(
    public id: number,
    public companyName: string,
    public jobTitle: string,
    public location: string,
    public startDate: string,
    public endDate: string | null,
    public description: string,
    public isCurrent: boolean,
  ) {}

  static from(raw: Experience): ExperienceModel {
    return new ExperienceModel(
      raw.id,
      raw.company_name,
      raw.job_title,
      raw.location,
      raw.start_date,
      raw.end_date ? raw.end_date : null,
      raw.description,
      raw.is_current,
    );
  }
}
