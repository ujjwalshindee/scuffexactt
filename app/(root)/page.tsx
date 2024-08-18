import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import RequestMoney from '@/components/RequestMoney';
import RepayDebt from '@/components/RepayDebt';
import BalanceBox from '@/components/BalanceBox';
import Footer from '@/components/Footer';



const Home = () => {
  const loggedIn = { firstName: 'Adrian' };
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Select an amount that you want in your bank account."
          />
          
          <BalanceBox />
          <RequestMoney />
          <RepayDebt />
          <Footer />
          
        </header>

      </div>
    </section>
  )
}

export default Home