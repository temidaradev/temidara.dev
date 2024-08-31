import UserModel from '../models/UserModel';
import { User } from './github';

// Example definition of the Experience type
export interface Experience {
  id: number;
  company_name: string;
  job_title: string;
  location: string;
  start_date: string;
  end_date: string | null;
  description: string;
  is_current: boolean;
}
