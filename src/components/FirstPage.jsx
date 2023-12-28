import BackToTop from './BackToTop';
import Benefit from './Benefit';
import Footer from './Footer';
import Header from './Header';
import Partnership from './Partnership';
import PublicSec from './PublicSec';
import Roadmap from './Roadmap';
import Tokenomics from './Tokenomics';
import Whitepaper from './Whitepaper';
const FirstPage = () => {
    return (
        <div>
            <Header />
            <Benefit />
            <Whitepaper />
            <Roadmap />
            <PublicSec />
            <Tokenomics />
            <Partnership />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default FirstPage
