import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('As vari�veis de ambiente do Supabase n�o est�o definidas. Verifique o .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
