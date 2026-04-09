import WorkExperience from "@/components/work";

  const WorkPage = () => {
    return (
      <section className="px-4 md:px-12 pb-16 w-full pt-8 md:mt-8 lg:mt-10">
        <WorkExperience isHomeView={false} />
      </section>
    );
  };
  
  export default WorkPage;
