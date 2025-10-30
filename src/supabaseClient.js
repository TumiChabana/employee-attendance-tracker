import {createClient} from '@supabase/supabase-js';

const supabaseurl='https://ujgamcmekeldjnltixme.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZ2FtY21la2VsZGpubHRpeG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NjUzMTEsImV4cCI6MjA3NzM0MTMxMX0.jTbLtn28emJ0rYmn_leuJtfryvXs3gWDJD2eeC9sNMo';

export const supabase=createClient(supabaseurl, supabaseKey);