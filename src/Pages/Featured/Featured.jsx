import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";

const Featured = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/featured");
      return res.json();
    },
  });

  if (isLoading) {
    return <Spinner aria-label="Default status example" />;
  }

  return (
    <div>
      <h1>Featured page {data.length}</h1>
    </div>
  );
};

export default Featured;
