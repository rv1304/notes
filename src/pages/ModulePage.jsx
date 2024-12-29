import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Notes from "../components/Notes";

const ModulePage = () => {
  const { id } = useParams();
  const [moduleData, setModuleData] = useState(null);

  useEffect(() => {
    import(`../data/${id}.json`)
      .then((data) => setModuleData(data))
      .catch((err) => console.error("Error loading module data", err));
  }, [id]);

  if (!moduleData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="module-page">
      <h1>{moduleData.moduleTitle}</h1>
      <Notes sections={moduleData.sections} />
    </div>
  );
};

export default ModulePage;
