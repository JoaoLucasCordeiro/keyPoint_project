const Footer = () => {
  return (
    <footer>
      <div className="h-[100px] flex items-center justify-around gap-20">

        <h5 className="purple_gradient font-bold text-2xl">KeyPoint</h5>
        

        <div className="flex items-center gap-2">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src="/public/profile.jpeg"
          alt="Foto de João Lucas Cordeiro, o desenvolvedor do site."
        />
        <span>
          Feito por{" "}
          <a
            href="https://www.linkedin.com/in/joaolucascordeiro/"
            target="_blank"
            rel="noreferrer"
            className="purple_gradient"
          >
            João Lucas Cordeiro
          </a>{" "}
          ❤
        </span>
        </div>
   
      </div>
    </footer>
  );
};

export default Footer;
