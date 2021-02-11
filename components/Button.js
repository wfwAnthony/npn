export const Button = ({ label, onClick }) => (
  <button
    onClick={() => onClick}
    className='px-6 py-2 m-1 text-sm font-semibold text-white bg-purple-500 rounded-sm hover:bg-purple-700'
  >
    {label}
  </button>
)
