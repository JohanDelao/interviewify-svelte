import { createClient } from '@supabase/supabase-js'
import { PUBLIC_PROJECT_URL, PUBLIC_ANON_KEY } from '$env/static/public'

export const supabase = createClient(PUBLIC_PROJECT_URL, PUBLIC_ANON_KEY);