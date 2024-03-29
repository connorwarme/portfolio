import Tools from "../components/Tools";
import ExternalLink from "../components/ExternalLink";
import AboutComp from "../components/About";
import resume from "../assets/ConnorWarmeResume.pdf"

const About = () => {

  const cv = {
    text: "Resume",
    url: resume,
    style: "p-2 pr-4 pl-4 border-2 border-wave-spray rounded-lg text-xl"
  }
  const gh = {
    text: 'GitHub',
    url: "https://github.com/connorwarme",
    style: "p-2 pr-4 pl-4 border-2 border-wave-spray rounded-lg text-xl"
  }
  return ( 
    <>
      <h1 className="text-4xl font-grenze text-center m-10">About</h1>
      <div className="bg-midnight-green/75 font-play p-2 mb-64" >
        <h3 className="text-xl font-semibold pt-3 pb-3 text-center">
          Hi, I&#39;m Connor - a software developer with full-stack experience.
        </h3>
        <Tools className="bg-wave-spray" />
        <div className="flex justify-center gap-3 mb-4">
          <ExternalLink link={cv} />
          <ExternalLink link={gh} />
        </div>
      </div>
      <AboutComp />
    </>
   );
}
 
export default About;