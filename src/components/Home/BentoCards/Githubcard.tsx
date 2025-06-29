import { Github } from "@/components/Icons/GIthubBentoIcon";
import { GithubCalendar } from "@/components/shared/GithubCalendar";
import BentoCard from "./BentoCard";
import Link from "next/link";
import { getGitHubStats } from "@/lib/getGithubStats";
import { cn } from "@/lib/utils";

const GithubCard = () => {
  return (
    <BentoCard className="group/github md:col-span-2 col-span-5 row-span-2">
      <Link
        href={"https://github.com/prash240303"}
        className="flex flex-col py-2  h-full w-full"
        target="_blank"
      >
        <div className="m-3 flex items-center gap-2">
          <Github className="size-4" />
          <h3 className="bg-gradient-to-b from-gray-300 to-gray-600 bg-clip-text font-neu text-sm text-transparent">
            Github{" "}
          </h3>
        </div>
        <div className="flex h-full pb-2 w-full mx-auto flex-col items-center justify-between">
          <div className="custom__scrollbar max-h-48 w-36 max-w-36 overflow-hidden">
            <GithubCalendar username={"prash240303"} />
          </div>
          <GithubStats />
        </div>
      </Link>
    </BentoCard>
  );
};
const GithubStats = async () => {
  const { followers, following, totalStars, totalIssues, totalPRs } =
    await getGitHubStats();
  const statsArray = [
    { label: "Followers", value: followers },
    { label: "Following", value: following },
    { label: "Stars", value: totalStars },
    { label: "Issues", value: totalIssues },
    { label: "PRs", value: totalPRs },
  ];
  return (
    <div className="flex flex-wrap px-4 gap-4">
      {statsArray.map((stat, index) => (
        <div
          key={index}
          className="githubStats px-9 py-2 flex rounded-xl flex-col items-center text-center transition-all duration-300 ease-in"
        >
          <span className="text-[#939393] dark:text-[#777777] text-sm">
            {stat.label}
          </span>
          <span className="font-semibold text-white">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};

export default GithubCard;
