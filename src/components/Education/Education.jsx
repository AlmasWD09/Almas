import Container from "../Shared/Container";


const Education = () => {
    return (
        <Container>
            <div className="my-10">
            <h1 className="text-2xl font-bold text-primary text-center">Education section</h1>
            <div className="flex flex-col lg:flex-row justify-center mt-5 gap-4">
                <div className="h-[250px] w-full lg:w-[500px] rounded-lg bg-green-300 hover:bg-primary hover:text-white flex flex-col justify-center items-center">
                    <h1 className="text-xl font-semibold">SSC</h1>
                    <p className="text-xl font-semibold">Date:2015</p>
                    <h1 className="text-xl font-semibold">Dhamor High School</h1>
                </div>
                <div className="h-[250px] w-full lg:w-[500px] rounded-lg bg-green-300 hover:bg-primary hover:text-white flex flex-col justify-center items-center">
                    <h1 className="text-xl font-semibold">HSC</h1>
                    <p className="text-xl font-semibold">Date:2017</p>
                    <h1 className="text-xl font-semibold">Fulbaria Gove Collage</h1>
                </div>
                <div className="h-[250px] w-full lg:w-[500px] rounded-lg bg-green-300 hover:bg-primary hover:text-white flex flex-col justify-center items-center">
                    <h1 className="text-xl font-semibold">BSC</h1>
                    <p className="text-xl font-semibold">Date:2022</p>
                    <h1 className="text-xl font-semibold">MM Ali Gove Collage</h1>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Education;