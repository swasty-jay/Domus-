import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yujyiileosrvbcoddbzt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1anlpaWxlb3NydmJjb2RkYnp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwOTAwNDAsImV4cCI6MjA1NzY2NjA0MH0.7KwX_Jh6BN8MwBd33pKOSIHzJe6zQFsh6DuC15E2m8E";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
