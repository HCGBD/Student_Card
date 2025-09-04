import { ModalTrigger } from "@/components/ui/shadcn-io/animated-modal";

function BtnDemande() {
  return (
    <>
      <div className="relative duration-500  hover:[transform:none]   group [transform:rotate3d(1_,-1,_1,_60deg)] border border-sky-900 border-4  overflow-hidden rounded-2xl relative h-96 w-64 bg-sky-800 p-5 flex flex-col items-start gap-4">
        <div className="text-gray-50">
          <span className="font-bold text-5xl">Carte Student </span>
          <p className="text-xs">
            Pour Recupper votre carde etudiant veiller faire une demande{" "}
          </p>
        </div>
        <ModalTrigger className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
          Demandez
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
        </ModalTrigger>

        <svg
          className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path
            data-name="layer1"
            d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
            strokeMiterlimit="10"
            strokeWidth="5"
          ></path>
        </svg>

        <svg
          className="group-hover:scale-125 duration-200 absolute bottom-0 right-0 w-32 h-32 z-10 fill-gray-50 stroke-sky-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path
            data-name="layer1"
            d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default BtnDemande;