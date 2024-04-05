import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                <h1 className="text-5xl">News details</h1>
                
                </div>
                <div>
                  <RightSideNav></RightSideNav>
                </div>

            </div>
           
        </div>
    );
};

export default NewsDetails;