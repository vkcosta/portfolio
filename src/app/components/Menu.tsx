const Menu = () => {
  return (
    <nav className="flex justify-end space-x-4 self-end pt-5 pr-6 pb-0">
      <a href="/about" className="hover:text-gray-300">About</a>
      <a href="/resume" className="hover:text-gray-300">Resume</a>
      {/* <a href="#" className="hover:text-gray-300">Portfolio</a>
      <a href="#" className="hover:text-gray-300">Blog</a> */}
      <a href="/contact" className="hover:text-gray-300">Contact</a>
    </nav>
  )
}

export default Menu;