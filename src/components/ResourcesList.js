import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourcesList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.it}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourcesList;
