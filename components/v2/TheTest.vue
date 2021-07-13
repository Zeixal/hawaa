<template>
  <section class="w-full" id="banner">
    <div class="side h-full">
      <h2
        class="
          text-4xl
          tracking-tight
          font-semibold
          text-gray-900
          sm:text-4xl
          md:text-5xl
          lg:text-5xl
        "
      >
        <span class="block text-accent-500 xl:inline">Qui somme-nous?</span>
      </h2>
      <p class="mt-2 max-w-md mx-auto text-lg text-accent-400 sm:text-xl">
        C’est en décembre 2020 que Daniel et Walid ont décidé d’ouvrir Hawa
        Bowls. Pas frileux, les deux meilleurs amis ont toujours souhaité créer
        un restaurant sain et équilibré, dédié au bien-être.Cette idée de départ
        les a emmené au poké. Le pokébowl est un encas typique des pêcheurs
        hawaïens. Initialement composé de riz vinaigré, de poisson frais, de
        fruits exotiques et de légumes, chez Hawa Bowls une touche nantaise est
        apportée aux recettes signatures du restaurant.
      </p>
      <p
        class="mt-2 max-w-md mx-auto text-lg text-accent-400 sm:text-xl md:mt-5"
      >
        Végétarien, végan, avec de la viande ou du poisson, il y en a pour tous
        les goûts ! Déjà composé, vous pouvez également laisser libre cours à
        votre imagination pour vous créer un poké bowl à votre image. Ici, tout
        est bon pour votre petit corps !
      </p>
      <div class="mt-10 sm:flex w-full flex-col justify-center  space-y-2">
        <div
          class="relative pb-4/5 sm:pb-1/2 px-auto rounded-lg flex justify-center overflow-hidden"
        >
          <img
            class="absolute md:hidden w-full h-full object-cover object-center "
            src="img/banner/bowl.png"
            alt=""
          />

          <video
            loop
            muted
            autoplay
            class="
            hidden md:block 
              absolute
              rounded-lg
              mx-auto
              object-fill
              object-center
              w-96
            h-full
            "
          >
            <source
              src="https://res.cloudinary.com/hawabowls/video/upload/q_80/v1624872794/Hawabowls/site_media/hawai-bowls-stop-motion_rygirv.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="">
          <nuxt-link
            to="#"
            class="
              w-full
              md:w-64
              flex
              items-center
              justify-center
              px-8
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-full
              text-white
              bg-accent-400
              hover:bg-accent-600
              mx-auto
              md:py-4
              md:text-lg
              md:px-10
            "
            >Commander</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="side-image h-full">
      <div class="h-full grid grid-cols-2 gap-4">
        <div
          class="col-span-1 bg-primary-300 big"
          role="img"
          aria-label=" fille qui mange un poke"
        ></div>

        <div class="col-span-1">
          <div class="grid grid-row-3 gap-3">
            <div class="hidden md:block card-i">
              <img
                class="h-full w-full object-cover"
                src="img/grid/little1.webp"
                alt="fille qui se prélasser au soleil"
              />
            </div>
            <div class="card-i">
              <img
                class="h-full w-full object-cover object-start"
                src="img/grid/little2.webp"
                alt="Un poke au bord de la plage"
              />
            </div>
            <div class="card-i">
              <img
                class="h-full w-full object-cover"
                src="img/grid/little3.webp"
                alt="Un surfeuse avec un tensai tea"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss">
#banner {
  display: flex;
  flex-direction: column;
  min-height: 78rem;
  padding: 2rem;
  @screen md {
    @apply flex-row py-20    px-6;
  }

  .side {
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .side-image {
    min-width: 50%;
    padding: 1rem;

    .big {
      border-radius: 0.5rem;
      height: 100%;
      background-image: url("/img/grid/big.webp");
      background-size: cover;
      background-position: center;
    }

    .card-i {
      @apply rounded-lg overflow-hidden;
      @screen lg {
        max-height: 18.75rem;
      }
    }
  }
}
</style>
