import { logo } from '../assets'


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="App logo" className='object-contain' width={150} height={150}/>
        <button type="button" onClick={() => { window.open("https://github.com/JoaoLucasCordeiro") }} className='black_btn'>GitHub</button>
      </nav>

      <h1 className='head_text'>
        Resuma seus textos com <br className='max-md:hidden' />
        <span className='purple_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        simplifique sua vida com <span className='purple_gradient font-medium'>KeyPoint</span>, um "resumidor" de artigos open source que transforma longos textos em resumos claros e concisos
      </h2>
    </header>
  )
}

export default Hero