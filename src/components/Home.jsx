import { SplittingText } from '@/components/ui/shadcn-io/splitting-text'
import BtnDemande from './BtnDemande'
import {
  Modal,
  ModalBody,
  ModalContent
} from '@/components/ui/shadcn-io/animated-modal'
import MyForm from './MyForm'
import CardStudent from './CardStudent'
import { useState } from 'react'
import MyLoader from './MyLoader'

function Home () {
  const [etudiant, setEtudiant] = useState(null)
  const [showCard, setShowCard] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  return (
    <>
      <div className='text-white flex justify-center flex-col gap-15 items-center '>
        <div className='flex flex-col justify-center items-center'>
          <SplittingText
            className='text text-center text-5xl italic font-extrabold uppercase'
            text='Bienvenue'
          />
          <SplittingText
            className='text text-center text-5xl italic font-extrabold uppercase'
            text='Sur'
          />
          <SplittingText
            className='text text-green-600 text-center text-5xl italic font-extrabold uppercase'
            text='Student Card'
          />
        </div>
        <div>
          <Modal>
            <BtnDemande />
            <ModalBody>
              <ModalContent className='overflow-y-auto'>
                <div className='flex  flex-col  justify-center items-center'>
                  <div className='mb-2'>
                    <h2 className='text-lg font-bold text-center text-black'>
                      Demande de carte d'étudiant
                    </h2>
                    <p className='text-sm text-center flex   text-gray-500 mt-2'>
                      Veuillez remplir le formulaire pour faire votre demande.
                    </p>
                  </div>

                  <div className='min-h-[250px] flex items-center justify-center'>
                    {showLoader ? (
                      <MyLoader />
                    ) : showCard ? (
                      etudiant ? (
                        <CardStudent Etudiant={etudiant} />
                      ) : (
                        <p className='text-red-500 text-center'>
                          L'INE que vous avez fourni n'a pas été trouvé.
                        </p>
                      )
                    ) : null}
                  </div>

                  <MyForm
                    setEtudiant={setEtudiant}
                    setShowLoader={setShowLoader}
                    setShowCard={setShowCard}
                  />
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Home
