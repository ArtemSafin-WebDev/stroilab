import home from "./pages-data/home";
import project from "./pages-data/project";
import projects from "./pages-data/projects";
import services from "./pages-data/services";

const pagesConfig = {
  ...home,
  ...projects,
  ...project,
  ...services,
};

export default pagesConfig;
