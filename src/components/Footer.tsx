const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <p className="text-primary-foreground/90 text-sm md:text-base">
            © {currentYear} <span className="font-semibold">NAVACHAR HR AND TECHNOLOGY SOLUTIONS PRIVATE LIMITED</span>. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
