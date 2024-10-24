import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://avpsnmazwuirqhpiyabg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2cHNubWF6d3VpcnFocGl5YWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3ODgwMDgsImV4cCI6MjA0NTM2NDAwOH0.0qM7V4ZaR3lAeEJHS5Zb0bXLksR20kpCNFES3VM-Ri4'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;