import Marquee from "react-fast-marquee";
import photo01 from "../../assets/images/html5.png"
import photo02 from "../../assets/images/css.png"
import photo03 from "../../assets/images/tailwind.png"
import photo04 from "../../assets/images/js.png"
import photo05 from "../../assets/images/react.png"
import photo06 from "../../assets/images/firebase.png"
import photo07 from "../../assets/images/express.png"
import photo08 from "../../assets/images/nodejs.png"
import photo09 from "../../assets/images/mongodb.png"
import photo10 from "../../assets/images/vscode.png"
import photo11 from "../../assets/images/git.png"
import photo12 from "../../assets/images/github.png"
import photo13 from "../../assets/images/figma.png"


const SkillPart = () => {
    return (
        <div className="my-10">
            <Marquee>
                <div className="flex gap-3">
                    <div className="bg-slate-600 py-8 ml-3  hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo01} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo02} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo03} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo04} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo05} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo06} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo07} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo08} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo09} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo10} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo11} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo12} alt="" />
                    </div>
                    <div className="bg-slate-600 py-8 hover:bg-primary px-20 cursor-pointer rounded-2xl">
                    <img className="hover:animate-spin" src={photo13} alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default SkillPart;