import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import RequestMoney from '@/components/ui/RequestMoney';
import RepayDebt from '@/components/ui/RepayDebt';
import BalanceBox from '@/components/ui/BalanceBox';

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
          
        </header>

      </div>
    </section>
  )
}

export default Home