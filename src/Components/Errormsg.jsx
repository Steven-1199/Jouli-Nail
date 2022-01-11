function Errormsg({ msg }) {
  return (
    <div className="alert alert-error mt-2 h-fit max-w-[17rem] flex flex-row  relative justify-center">
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 mx-2 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
        </div>
        <p>Please choose {msg}</p>
      </div>
    </div>
  );
}

export default Errormsg;
