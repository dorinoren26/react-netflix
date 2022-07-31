const Home = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="header-home ">
        <h1 className="h1-home">
          Unlimited movies, TV
          <br /> shows, and more.
        </h1>
        <h2> Watch anywhere. Cancel anytime.</h2>
      </div>
      <hr className="hr" />

      <div className=" home-section">
        <div className="card-home mx-auto row g-3">
          <div className=" col-lg-6 col-sm-12 ">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>
          <div className=" col-lg-6 col-sm-12">
            <img
              className="img-home"
              src="https://fdn.gsmarena.com/imgroot/news/21/11/netflix-games-worldwide-on-android/-1200/gsmarena_001.jpg"
              alt="image"
            />
          </div>

          <hr className="hr" />

          <div className=" col-lg-6 col-sm-12">
            <img
              className="img-home"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="image"
            />
          </div>
          <div className=" col-lg-6 col-sm-12 ">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favorites easily and always have something to watch.
            </h2>
          </div>

          <hr className="hr" />

          <div className=" col-lg-6 col-sm-12 ">
            <h1>Create profiles for kids.</h1>
            <h2>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h2>
          </div>
          <div className=" col-lg-6 col-sm-12">
            <img
              className="img-home"
              src="https://occ-0-2622-1723.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
