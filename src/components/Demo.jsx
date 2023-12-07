import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const [allArticles, setAllArticles] = useState([])

  const [copied, setCopied] = useState("")

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }

  }, [])

  const handleSubmit = async (e) => {

    e.preventDefault()

    const { data } = await getSummary({ articleUrl: article.url })

    if (data?.summary) {
      const newArticle = {
        ...article, summary: data.summary
      }

      const updatedAllArticles = [newArticle, ...allArticles]

      setAllArticles(updatedAllArticles)

      setArticle(newArticle)

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
    }

  }

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    setTimeout(() => setCopied(false), 4000);
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* barra de pesquisa */}
      <div className='flex flex-col w-full gap-2'>

        <span className='text-center text-gray-600'>No campo abaixo, insira o link de um texto ao qual você deseja obter um resumo</span>

        <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>

          <img src={linkIcon} alt="link icon" className='absolute left-0 my-2 ml-3 w-5' />

          <input
            type="url"
            placeholder='Insira uma URL'
            value={article.url}
            onChange={(e) => setArticle({
              ...article, url: e.target.value
            })}
            required
            className='url_input peer'
          />


          <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
            🔍
          </button>

        </form>

        {/* histórico de pesquisas */}

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">

          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img src={copied === item.url ? tick : copy} alt="copy icon" className="w-[40%] h-[40%] object-contain" />
              </div>
              <p className='flex-1 font-atoshi text-blue-700 font-medium text-sm truncate'>{item.url}</p>
            </div>
          ))}

        </div>
      </div>

      {/* resultados da pesquisa */}

      <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt="loader" className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Acho que acontece algum erro...
            <br />
            <span className='font-atoshi font-normal text-gray-700'>{error?.data?.error}</span>
          </p>
        ) : (

          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-atoshi font-bold text=gray-600 text-xl'>Texto <span className='blue_gradient'>resumido</span></h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )

        )}
      </div>


    </section>
  )
}

export default Demo 