const Statistic = () => {
    return (
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className="text-3xl font-bold text-center mb-10">Ölkə Üzrə Statistikamız</h1>
        <div class="grid row-gap-8 sm:grid-cols-3">
          <div class="text-center">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">144K</h6>
            <p class="font-bold">Internet abunəçisi</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">12.9K</h6>
            <p class="font-bold">Tv abunəçisi</p>
          </div>
          <div class="text-center">
            <h6 class="text-5xl font-bold text-deep-purple-accent-400">27.3K</h6>
            <p class="font-bold">IP Tv abunəçisi</p>
          </div>
        </div>
      </div>
    );
  };

  export default Statistic;