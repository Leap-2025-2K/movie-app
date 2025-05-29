import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const categoryName = router.query?.categoryName;

  // -> upcoming
  `/movie/${categoryName}?language=en-US&page=1`;

  return <div>Category</div>;
};

export default Page;
