import './App.css';
import { TeamCard } from './components/TeamCard';
import { SingleCard } from './components/SingleCard';

function App() {
  return (
    <div className="relative h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 h-full bg-white  md:pb-2 lg:w-full ">
          <div className="relative z-40 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6"></div>
          </div>
          <main className="h-full px-4 mx-auto mt-5 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex flex-col items-start w-full md:flex-row ">
              <div className="z-20 flex flex-col items-center justify-start w-full h-full text-left md:z-30 md:w-1/2 md:items-start m">
                <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 titleHome ">
                  <span className="flex w-full m-auto purp-gradient drop-shadow-lg">
                    Our Teams
                  </span>
                </h1>
              </div>
            </div>
            <h3 className="text-[#354364] md:text-[30px] overline decoration-purple-50 mt-10">
              Learn From Scientists, Research Scholars from the top institutes
              in the world
            </h3>
          </main>
        </div>
      </div>

      <section className=" pb-5 lg:pt-[50px] lg:pb-5">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <TeamCard
              university="Cambridge University"
              imageSrc="https://images.unsplash.com/photo-1629038767056-cbd4df86332b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80"
            />
            <TeamCard
              university="Harvard University"
              imageSrc="https://2u.com/static/84f4025b19c2bf44a1c9b049994c1eff/ee8ba/baker-library-harvard-university_OPxWuDn.max-2880x1800.jpg"
            />
            <TeamCard
              university="University of California"
              imageSrc="https://www.slamstox.com/wp-content/uploads/2021/10/UCLA.jpg"
            />
            <TeamCard
              university="Max Plank"
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/3/3f/New_building_of_the_Max_Planck_Institute_for_the_Science_of_Light_in_Erlangen_February_2016.jpg"
            />

            <TeamCard
              university="University of Edinburgh"
              imageSrc="https://i.pinimg.com/1200x/c8/2d/84/c82d8417d73fa7e8e372cf8a838397eb.jpg"
            />
            <TeamCard
              university="Jhon hopkins university"
              imageSrc="https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/gilman_1.jpg"
            />

            <TeamCard
              university="University of illinois"
              imageSrc="https://media.istockphoto.com/id/178512164/photo/foellinger-auditorium.jpg?s=612x612&w=0&k=20&c=I1PbkDjlXOWoIZTXlKSkh2aRb1lPX3RyEnCd2rFETiM="
            />
            <TeamCard
              university="ETH Zurich"
              imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/56/ETHZ.JPG"
            />
          </div>
        </div>
      </section>

      <section className="py-6 dark:bg-white-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center  mx-auto space-y-8 ">
          <h1 className="text-4xl font-extrabold leadi text-center purp-gradient sm:text-5xl drop-shadow-lg">
            Meet your Mentors
          </h1>

          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-10 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://d92mrp7hetgfk.cloudfront.net/images/sites/H2B/professor/original.jpg?1532640576"
              />
              <p className="text-xl font-semibold leadi text-black">
                Daisy Jones
              </p>
              <p className="dark:text-gray-400 italic">Harvard University,UK</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                // src="https://source.unsplash.com/100x100/?portrait?1"
                src="https://source.unsplash.com/32co88SaiN4"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburh,UK
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/aCZ2hiC-iDk"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic ">
                University of Edinburgh,UK
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/jzz_3jWMzHA"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://th.bing.com/th/id/OIP.oD54jr8kLJN4H6HVa4pxpwHaLH?pid=ImgDet&rs=1"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/EQFtEzJGERg"
              />
              <p className=" text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/ZHvM3XIOHoE"
              />
              <p className="text-xl  font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://business.cornell.edu/wp-content/uploads/sites/2/2020/05/willcong40u401.jpg"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/RD3MOZ_Dgmw"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/HrpYHchKb5Y"
              />
              <p className="text-xl font-semibold leadi text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/GfuvYM8LPPQ"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">
                University of Edinburgh,UK
              </p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="testing self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src="https://source.unsplash.com/sgZX15Da8YE"
              />
              <p className="text-xl font-semibold leadi  text-black">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-400 italic">John's Hookin,UK</p>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-4xl font-extrabold leadi text-center purp-gradient sm:text-5xl drop-shadow-lg ">
        Mentors and advisors
      </h1>

      <div>
        <section className="lg:pt-[50px] pb-10 lg:pb-20 h-full ">
          <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <SingleCard
              image="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
              CardTitle="Dr. Onkar Patel"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Principal Project Scientist, IIT MADRAS"
              Button="Message him now"
            />
            <SingleCard
              image="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
              CardTitle="Akhil Tripathi"
              CardDescription="Project Lead, Polygon"
              Button="Message him now"
            />
            <SingleCard
              image="https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3274&q=80"
              CardTitle="Vivek Srinivas"
              CardDescription="Principal Engineer, OpenAi"
              Button="Message him now"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
