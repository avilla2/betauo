import React from "react";
import { useQuery } from "@apollo/client";

const Query = ({ children, query, slug }) => {
  const { data, loading, error } = useQuery(query, {
    fetchPolicy: "cache-first",
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;