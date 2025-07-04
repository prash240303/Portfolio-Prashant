import AnimeCard2 from "./BentoCards/AnimeCard2";
import GithubCard from "./BentoCards/Githubcard";
import SocialsCard from "./BentoCards/SocialsCard";
import StacksCard from "./BentoCards/StacksCard";

const Bento = () => {
  return (
    <div className="grid-cols-5 mt-16 grid-rows-2 gap-4 grid">
      <StacksCard isForSmall={true} />
      {/* <GithubCard /> */}
      <SocialsCard />
    </div>
  );
};
export default Bento;
