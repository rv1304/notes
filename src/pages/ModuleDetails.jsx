import React from 'react';
import { useParams } from 'react-router-dom';
import modules from '../data/modules';

const ModuleDetails = () => {
  const { id } = useParams();
  const module = modules.find((mod) => mod.id.toString() === id);

  if (!module) {
    return <p>Module not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{module.title}</h1>
      <p className="text-gray-700">{module.content}</p>
    </div>
  );
};

export default ModuleDetails;
