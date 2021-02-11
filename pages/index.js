import { supabase } from '../lib/initSupabase'
import { Auth } from '@supabase/ui'
import { Nav } from '../components/Nav'
import SeasonTable from '../components/SeasonTable'

export default function Home() {
  const { user } = Auth.useUser()

  return (
    <div>
      {!user ? (
        <div className='flex items-center justify-center w-full h-full p-4'>
          <Auth
            supabaseClient={supabase}
            providers={['google', 'github']}
            socialLayout='horizontal'
            socialButtonSize='xlarge'
          />
        </div>
      ) : (
        <div>
          <Nav></Nav>
          <div className='container mx-auto'>
            <SeasonTable></SeasonTable>
          </div>
        </div>
      )}
    </div>
  )
}
