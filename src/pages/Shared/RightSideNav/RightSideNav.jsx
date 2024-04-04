import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bgImg from '../../../assets/bg1.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-3 ">
        <h2 className="text-2xl space-y-4">Login With</h2>
        <button className="btn btn-outline mb-1 w-full">
          <FaGoogle></FaGoogle>
          <span>Login with Google</span>
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          <span>Login with Github</span>
        </button>
      </div>
      <div className="p-4 mb-6 flex flex-col ">
        <h2 className="text-2xl space-y-4">Find Us On</h2>
        <a href="" className="border border-black rounded-t-lg mb-3 flex items-center">
          <FaFacebook className="mr-2"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a href="" className="border border-black rounded-t-lg mb-3 flex items-cente">
          <FaTwitter  className="mr-2" ></FaTwitter>
          Twitter
        </a>
        <a className="border border-black rounded-t-lg mb-3 flex items-cente" href="">
          <FaInstagram  className="mr-2"></FaInstagram>
          Instagram
        </a>
      </div>
      <div className="p-4 mb-3 bg-gray-100  ">
        <h2 className="text-2xl space-y-4">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div>
         <img src={bgImg} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
