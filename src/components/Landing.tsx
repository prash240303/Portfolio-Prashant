const Hero = () => {
  return (
    <section className="flex md:mt-4 px-4 bg-neutral-50/85 bg-blur-lg  view-container  mt-4 flex-col items-center justify-center gap-10 border border-neutral-200 rounded-[36px] shadow-lg">
      <div className="flex flex-col md:mt-[220px] mt-48 gap-4 items-start justify-start p-12">
        <div className="text-left text-2xl text-neutral-500">
          {`🤘 Yo, I'm Prashant, married to frontend developement and...`}
        </div>
        <div className="text-left font-semibold text-3xl md:text-7xl lg:text-[80px]">
          Lorem epsum dolor sit amet consectetur adipisicing elit. Quisquam  quibusdam.
        </div>
      </div>
    </section>
  );
}

export default Hero;
