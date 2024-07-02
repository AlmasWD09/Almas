import Marquee from "react-fast-marquee";
import photo01 from "../../assets/images/html5.png"
import photo02 from "../../assets/images/js.png"
import photo03 from "../../assets/images/express.png"
import photo04 from "../../assets/images/nodejs.png"
import photo05 from "../../assets/images/mongodb.png"
const SkillPart = () => {
    return (
        <div>
            <Marquee>
                <div className="flex gap-3">
                    <div className="bg-gray-300 py-8 hover:bg-green-400 px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo01} alt="" />
                    </div>
                    <div className="bg-gray-300 py-8 hover:bg-green-400 px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo02} alt="" />
                    </div>
                    <div className="bg-gray-300 py-8 hover:bg-green-400 px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo03} alt="" />
                    </div>
                    <div className="bg-gray-300 py-8 hover:bg-green-400 px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo04} alt="" />
                    </div>
                    <div className="bg-gray-300 py-8 hover:bg-green-400 px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo05} alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default SkillPart;