import { Link } from "@remix-run/react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="rounded-full overflow-hidden w-52 h-52">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH-uTfLCIL1DA/profile-displayphoto-shrink_800_800/0/1653316104518?e=1671062400&v=beta&t=kRMaWCxK8t8vAJOIvRS_UezpcCKBPvnIAfnw7XljyU0" />
          </div>
        </div>
        <h1 className="text-3xl font-bold uppercase mb-5">Thibault Fayard</h1>
        <h3 className="text-xl font-thin uppercase mb-12">
          Développeur web junior
        </h3>
        <div className="flex gap-5">
          <Link to="/projects" className="underline">
            Mes projets
          </Link>
          <Link to="/formation" className="underline">
            Formation
          </Link>
          <Link to="/experience" className="underline">
            Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
