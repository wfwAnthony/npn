import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '../lib/initSupabase'

export default function SeasonTable() {
  const [seasons, setSeasons] = useState([])
  const [newSeasonName, setNewSeasonName] = useState('')
  const [error, setError] = useState('')
  const [editModalVis, toggleEditModalVis] = useState(false)
  const [currentlyEditing, setCurrentlyEditing] = useState('1')

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    modifySeason(currentlyEditing, data)
  }

  useEffect(() => {
    fetchSeasons()
  }, [])

  const fetchSeasons = async () => {
    let { data: seasons, error } = await supabase
      .from('seasons')
      .select('*')
      .order('id', true)

    if (error) console.log('error', error)
    else setSeasons(seasons)
  }
  const addSeason = async () => {
    let { data: season, error } = await supabase
      .from('seasons')
      .insert({ name: 'New Season' })
      .single()
    if (error) setError(error.message)
    else setSeasons([...seasons, season])
  }

  const modifySeason = async (id, data) => {
    let { data: season, error } = await supabase
      .from('seasons')
      .update({ name: data.name })
      .match({ id: id })
    if (error) setError(error.message)
    else fetchSeasons()
  }

  const deleteSeason = async (id) => {}

  const EditModal = () => (
    <div
      className={` ${
        editModalVis ? 'visible' : 'invisible'
      } fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 bg-gray-500 bg-opacity-30`}
    >
      <div className='static px-8 py-4 bg-white rounded-sm'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='border'
            name='name'
            placeholder='Season Name'
            ref={register}
          />
          <input className='block' type='submit' />
        </form>
        <button
          className='relative top-0 right-0'
          onClick={() => {
            setCurrentlyEditing(0)
            toggleEditModalVis(!editModalVis)
          }}
        >
          Close
        </button>
      </div>
    </div>
  )

  return (
    <>
      <EditModal></EditModal>
      <div className='flex items-center justify-between pt-16'>
        <h1 className='text-2xl font-bold'>Seasons</h1>
        <button
          className='px-6 py-2 m-1 text-sm font-semibold text-white bg-purple-500 rounded-sm hover:bg-purple-700'
          onClick={() => addSeason()}
        >
          New Season
        </button>
      </div>
      <table className='w-full my-4 table-fixed'>
        <thead>
          <tr>
            <th className='w-2/3 p-2 border'>Name</th>
            <th className='w-1/3 p-2 border'>Teams</th>
          </tr>
        </thead>
        <tbody>
          {seasons.map((s, i) => (
            <tr className={i % 2 ? '' : 'bg-gray-100'}>
              <td className='flex px-8 py-2 text-center border'>
                <span className='flex flex-1'>{s.name}</span>
                <button
                  onClick={() => {
                    setCurrentlyEditing(s.id)
                    toggleEditModalVis(!editModalVis)
                  }}
                >
                  Edit
                </button>
              </td>
              <td className='px-2 py-2 text-center border'>{s.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
