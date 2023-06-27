export default function NavBar() {
  return (
    <nav>
      &nbsp; | &nbsp;
      <a href="../pages/AboutMePage.jsx">About Me</a>
      {/* How can I make this open to a page on app or index instead of scrolling down the page? */}
      &nbsp; | &nbsp;
      <a href="../pages/ResumePage">Resume</a>
      &nbsp; | &nbsp;
      <a href="../pages/ProjectsPage">Projectse</a>
      &nbsp; | &nbsp;
      <a href="../pages/ResourcesPage">Resources</a>
      &nbsp; | &nbsp;
    </nav>
  );
}
