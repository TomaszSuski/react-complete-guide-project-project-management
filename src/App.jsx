import React from "react";
import ProjectsSidebar from "./components/ProjectsSidebar";
// import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className="flex h-screen gap-8 py-8 ">
      <ProjectsSidebar />
      <NoProjectSelected />
      {/* <NewProject /> */}
    </main>
  );
}

export default App;
