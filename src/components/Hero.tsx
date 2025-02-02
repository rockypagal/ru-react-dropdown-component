import { sidebarData } from "../utils/sidebarData";
interface heroProp {
  currentHero: string;
}
const Hero = ({ currentHero }: heroProp) => {
  return <div className="hero">{sidebarData[currentHero]}</div>;
};

export default Hero;
