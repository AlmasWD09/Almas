
import photo from "../../assets/almas.png"
import resume from "../../assets/images/certificated-ph(09).pdf"
const Banner = () => {
    return (
         <div className="bg-green-100 pt-10 lg:pt-20 pb-10 xl:px-20 md:px-10 sm:px-2 px-4">
            <div className=" flex flex-col lg:flex-row justify-center items-center gap-10">
                <div>
                    <h1 className="text-xl font-semibold">Hi' I am <span className=" text-primary">Almas Hossain</span></h1>
                    <h2 className="text-xl font-semibold">I am Passionate Jr.Front End Developer</h2>
                    <button className="btn bg-green-400 px-2 py-1"><a href={resume} download="resume.pdf">Download Cv</a></button>
                </div>
                <div className="">
                    <img className="w-[200px] h-[200px] border-dashed border-2 border-primary rounded-full animate-pulse p-4" src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;