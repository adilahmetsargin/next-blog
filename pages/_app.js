import '../styles/global.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-800">
      <Header />
      <main className="mt-6 mb-20">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
