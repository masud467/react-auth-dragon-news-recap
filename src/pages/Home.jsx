import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           
            <div className="grid grid-cols-4 gap-6">
                <div className="border-2">
                  <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border">
                    <h1 className="text-2xl">Coming soon...........</h1>
                </div>
                <div className="border-2 border-green-600">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;