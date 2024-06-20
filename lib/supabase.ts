


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('http://74.235.93.9:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzE3OTU3ODAwLAogICJleHAiOiAxODc1NzI0MjAwCn0.XrCbkNQDLY0fvtqJ7ZHdimDSihI7sRfbqtIjqOXgrNg')