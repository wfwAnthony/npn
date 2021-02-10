export const Nav = () => {
  return (
    <nav className="fixed z-50 w-full h-12 bg-white bg-opacity-50 border-b blur">
      <ul className="flex items-center justify-center">
        <NavButton label="League"></NavButton>
        <NavButton label="Teams"></NavButton>
        <NavButton label="Games"></NavButton>
      </ul>
    </nav>
  );
};

export const NavButton = ({ label }) => (
  <li className="px-6 py-2 m-1 text-sm font-semibold rounded-sm cursor-pointer hover:text-purple-800 hover:bg-purple-300">
    {label}
  </li>
);
