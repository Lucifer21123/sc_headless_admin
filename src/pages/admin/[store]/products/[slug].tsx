import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { store, slug } = router.query;

  return (
    <div>
      {slug}
      {store}
    </div>
  );
};

export default Slug;
