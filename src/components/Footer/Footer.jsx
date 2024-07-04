

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex justify-center bg-green-100 py-10">
                <p className="text-sm text-gray-600 ">© Copyright {currentYear}. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;