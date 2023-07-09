import { UserInterface } from 'interfaces/user';
import { BotInterface } from 'interfaces/bot';
import { GetQueryInterface } from 'interfaces';

export interface SessionInterface {
  id?: string;
  user_id?: string;
  bot_id?: string;
  start_time: any;
  end_time?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  bot?: BotInterface;
  _count?: {};
}

export interface SessionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  bot_id?: string;
}
