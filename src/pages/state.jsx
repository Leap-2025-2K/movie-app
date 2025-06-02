import {
  parseAsArrayOf,
  parseAsBoolean,
  parseAsInteger,
  useQueryState,
} from "next-usequerystate";
import { useRouter } from "next/router";
import { useState } from "react";

const Page = () => {
  const [state, setState] = useState("movieId");
  const router = useRouter();
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [array, setArray] = useQueryState(
    "array",
    parseAsArrayOf(parseAsInteger).withDefault([1, 2, 3])
  );
  const [queryState, setQueryState] = useQueryState(
    "queryState",
    parseAsBoolean.withDefault(true)
  );

  const handleClick = () => {
    setQueryState(false);
    // router.push(`/newPage?queryState=${queryState}`);
  };
  console.log(array);
  return (
    <div className="flex justify-center items-center gap-4">
      {/* <button onClick={handleClick}>click</button> */}
      <button onClick={() => setPage(page + 1)}>click +1</button>
      <p>{page}</p>
      <button onClick={() => setPage(page - 1)}>click -1</button>
    </div>
  );
};

export default Page;
