import { useQuery } from "@apollo/client";
import { GET_ABOUT_ME_ITEMS } from "@/lib/aboutMeQueries";
import AboutMeBio from "./AboutMeBio";

const AboutMeQuery = () => {
  const { data, loading, error } = useQuery(GET_ABOUT_ME_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error || !data) {
    console.error("Apollo Error:", error);
    return <p>Error: {error?.message}</p>;
  }

  return <AboutMeBio aboutMeItems={data.aboutMeItems} />;
};

export default AboutMeQuery;
