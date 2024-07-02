

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex justify-center">
                <p className="text-sm text-gray-600 absolute bottom-4 ">© Copyright {currentYear}. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;