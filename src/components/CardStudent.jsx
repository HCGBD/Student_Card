import Flag from '../images/GN_Flag.jpg'
import avatar from '../images/avatar.png'

function CardStudent ({ Etudiant }) {

  let valid = ''

  if (Etudiant.isValid) {
    valid = 'text-green-500'
  }
  else{
    valid = 'text-red-500'
  }

  return (
    <>
      <div className='card border-2 w-[35vw] ms-4 border-gray-500 rounded-xl  shadow-2xl shadow-gray-500 bg-blue-500   '>
        <div className='flex justify-evenly items-center  text-black bg-gray-100 rounded-t-xl  mb-1  '>
          <div  >
            <img className='w-[40px] h-[40px]  mt-1 object-cover' src={Flag} alt='Flag' />
          </div>
          <div>
            <h1 className='text-xl font-bold '>Carte Etudiant Unique</h1>
          </div>
        </div>
        <div className='flex justify-evenly '>
          <div className='imgC '>
            <img className='w-[100px] h-[100px] rounded-full object-cover' src={avatar} alt='Avatar' />
            <p className={`text-center font-bold  ${valid} `}>
              Validité: <br />
              {Etudiant.startYear}-{Etudiant.endYear}
            </p>
          </div>
          <div className='bC'>
            <h1 className='text-xl uppercase font-bold'>{Etudiant.fullName}</h1>
            <div className='border border-gray-600'></div>
            <p className='text-gray-300'>INE:</p>
            <h1 className='uppercase font-bold'>{Etudiant.identifiantNationalEleve}</h1>
            <p className='text-gray-300'>Niveau:</p>
            <h1 className='uppercase font-bold'>{Etudiant.niveau}</h1>
            <p className='text-gray-300'>Programme:</p>
            <h1 className='uppercase font-bold'>{Etudiant.programme}</h1>
          </div>
        </div>
        <div className=' bg-gray-200  text-black pb-3 mt-2 rounded-b-xl '>
    
          <h1 className='uppercase text-center font-bold rounded-2xl  '>
            {' '}
            {Etudiant.institution}
            </h1>
        </div>
      </div>
    </>
  )
}

export default CardStudent
