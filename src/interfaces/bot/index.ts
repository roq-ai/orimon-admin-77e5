import { SessionInterface } from 'interfaces/session';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface BotInterface {
  id?: string;
  name: string;
  status: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  session?: SessionInterface[];
  company?: CompanyInterface;
  _count?: {
    session?: number;
  };
}

export interface BotGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  company_id?: string;
}
