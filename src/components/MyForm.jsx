import * as yup from 'yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

const schema = yup.object().shape({
  ine: yup
    .string()
    .required('Le code est obligatoire')
    .matches(/^[A-Z]{4}\d{10}$/, 'Format invalide (ex: DIMC3105897396)')
})

function MyForm ({ setEtudiant, setShowLoader,setShowCard }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const dataApi = async ine => {
    setShowLoader(true)
    setShowCard(false) // Hide card while loading
    axios
      .get(
        `/api/Student/GetStudentCardInfo/${ine}`
      )
      .then(response => {
        // Check if the response data indicates a non-existent student
        if (response.data && response.data.identifiantNationalEleve) {
          setEtudiant(response.data)
        } else {
          // API returned a success response, but the student is not found (e.g., null fields)
          setEtudiant(null)
        }
      })
      .catch(error => {
        // Handle actual network/server errors
        console.error('Erreur API:', error)
        setEtudiant(null)
      })
      .finally(() => {
        setShowLoader(false)
        setShowCard(true)
      })
  }

  const onSubmit = data => {
    dataApi(data.ine)
  }

  return (
    <>
      <div className='w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6 mt-4'>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder='Entrez votre INE'
            name='ine'
            className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
            type='text'
            {...register('ine')}
          />
          {errors.ine && (
            <p className='text-red-500 text-sm'>{errors.ine.message}</p>
          )}

          <button
            className='bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150'
            type='submit'
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
  )
}

export default MyForm
