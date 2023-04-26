import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export class News extends Component {
  static propTypes = {}

  // for passing articles as a array
  // articles=null
  articles=[]
    /*{
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "By Jeevan Ravindran, <a href=\"/profiles/lauren-moorhouse\">Lauren Said-Moorhouse</a>, <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a>, <a href=\"/profiles/meg-wagner\">Meg Wagner</a> and <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a>, CNN",
    "title": "The latest on the Ukraine-Russia border crisis - CNN",
    "description": "Russia says some of its troops will return to base after completing drills, but stressed that other major military exercises would continue. The news was met with skepticism in Ukraine. Get the latest updates here.",
    "url": "https://www.cnn.com/europe/live-news/ukraine-russia-news-02-15-22-intl/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220215043412-ukraine-tank-exercises-02102022-restricted-super-tease.jpg",
    "publishedAt": "2022-02-15T14:08:00Z",
    "content": "The US believes Russian intelligence agencies have worked closely with the editorial staff of five Russian-language media outlets to boost public support for a renewed Russian invasion of Ukraine, US… [+1750 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WLKY Louisville"
    },
    "author": "WLKY Digital Team",
    "title": "Louisville activist reported missing last year charged with attempted murder of mayoral candidate - WLKY Louisville",
    "description": "A Louisville man at the center of a missing persons case last year has been identified as the man whom police said opened fire in the campaign headquarters of a Louisville mayoral candidate.",
    "url": "https://www.wlky.com/article/louisville-activist-reported-missing-last-year-charged-in-attempted-shooting-of-mayoral-candidate/39075010",
    "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/brownshootingscene-1644891287.jpg?crop=0.959xw:1.00xh;0.0212xw,0&resize=1200:*",
    "publishedAt": "2022-02-15T13:48:00Z",
    "content": "LOUISVILLE, Ky. —A Louisville man at the center of a missing persons case last year has been identified as the man whom police said opened fire in the campaign headquarters of a Louisville mayoral ca… [+2118 chars]"
    },
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Will Horner",
    "title": "Stocks Open Higher, Oil Drops as Investors Eye Ukraine and Russia - The Wall Street Journal",
    "description": "S&P 500 on course to rise following three days of losses; bond prices fall",
    "url": "https://www.wsj.com/articles/global-stocks-markets-dow-update-02-15-2022-11644914012",
    "urlToImage": "https://images.wsj.net/im-486209/social",
    "publishedAt": "2022-02-15T13:48:00Z",
    "content": "U.S. stock indexes opened higher and European indexes rallied, following days of losses, while energy prices slumped and bonds sold off, after Russia said it had pulled back some troops from the Ukra… [+244 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Michael Sheetz",
    "title": "Virgin Galactic stock rises as spaceflight ticket sales open with $150,000 deposit - CNBC",
    "description": "Space tourism company Virgin Galactic announced Tuesday that it will open ticket sales to the public on Wednesday, requiring a $150,000 deposit.",
    "url": "https://www.cnbc.com/2022/02/15/virgin-galactic-stock-rises-as-ticket-sales-reopen-150000-deposit.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106923537-1628280187539-virgin_galactic_Unity22_screenshot_2.png?v=1628280270",
    "publishedAt": "2022-02-15T13:28:41Z",
    "content": "Space tourism company Virgin Galactic announced Tuesday that it will open ticket sales to the public on Wednesday, requiring a $150,000 deposit.\r\nVirgin Galactic ticket prices start at $450,000 each,… [+1227 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Fox Business"
    },
    "author": "Megan Henney",
    "title": "Wholesale prices jump 9.7% in January, further evidence of red-hot inflation - Fox Business",
    "description": "Wholesale prices accelerated again in January as strong consumer demand and pandemic-related supply-chain snarls continued to fuel the highest inflation in decades.",
    "url": "https://www.foxbusiness.com/economy/producer-prices-inflation-january-2022",
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/12/0/0/GettyImages-1231500300.jpg?ve=1&tl=1",
    "publishedAt": "2022-02-15T13:28:07Z",
    "content": "Wholesale prices\r\n accelerated again in January as strong consumer demand and pandemic-related supply-chain snarls continued to fuel the highest inflation in decades.\r\nThe Labor Department said Tuesd… [+2680 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eonline.com"
    },
    "author": "Kisha Forde",
    "title": "See Khloe Kardashian React After Pete Davidson Sends Her Valentine’s Day Flowers - E! NEWS",
    "description": "Kim Kardashian wasn't the only one feeling the love on Valentine's Day thanks to Pete Davidson. The SNL star sent an array of pink flowers to his girlfriend's sister, Khloe Kardashian.",
    "url": "https://www.eonline.com/news/1319830/see-khloe-kardashian-react-after-pete-davidson-sends-her-valentines-day-flowers",
    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022115/rs_1200x1200-220215044002-1200-khloe-kardashian-pete-davidson-021522.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    "publishedAt": "2022-02-15T13:17:00Z",
    "content": "Roses are red, violets are blue. Amid his romance with Kim Kardashian, Pete Davidson sent love to Khloe Kardashian, too.For Valentine's Day this year, Khloe received a slew of gifts and floral arrang… [+788 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Why Richard Sherman says Matthew Stafford isn't a Hall of Famer | Keyshawn, JWill and Max - ESPN",
    "description": "Why Richard Sherman says Matthew Stafford isn't a Hall of Famer | Keyshawn, JWill and MaxKeyshawn, JWill and Max discuss Richard Sherman's stance that Matthe...",
    "url": "https://www.youtube.com/watch?v=As-YEvjqPp4",
    "urlToImage": "https://i.ytimg.com/vi/As-YEvjqPp4/maxresdefault.jpg",
    "publishedAt": "2022-02-15T13:02:32Z",
    "content": null
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Sandra Gonzalez and Lisa Respers France, CNN",
    "title": "Wanda Sykes, Amy Schumer and Regina Hall to host the Oscars - CNN",
    "description": "And the Oscar host duties go to ... Wanda Sykes, Amy Schumer and Regina Hall.",
    "url": "https://www.cnn.com/2022/02/15/entertainment/oscars-hosts/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220214182730-wanda-sykes-amy-schumer-regina-hall-split-super-tease.jpg",
    "publishedAt": "2022-02-15T13:02:00Z",
    "content": null
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Chaim Gartenberg",
    "title": "Lego’s latest video game collaboration is a fantastic looking Horizon Forbidden West set - The Verge",
    "description": "Lego is teaming up with Guerilla Games for a Horizon Forbidden West-inspired set that brings Aloy and a pair of robotic dinosaurs to brick form: the Tallneck and the Watcher. The set will be out in May 2022 for $79.99.",
    "url": "https://www.theverge.com/2022/2/15/22933964/lego-horizon-forbidden-west-set-guerilla-games-collaboration",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/_oW6LafXT9Uy3Bcm5QHEfSVzpMQ=/0x171:3360x1930/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23242037/horizon2.png",
    "publishedAt": "2022-02-15T13:00:00Z",
    "content": "Coming in May for $79.99\r\nLego is teaming up with Guerrilla Games on a Horizon Forbidden West set, which transforms the overgrown wildernesses and robotic dinosaurs of the games into a new, Lego form… [+1561 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Graham Graham",
    "title": "Trump Organization's accounting firm, Mazars USA, recants a decade of his financial statements - CBS News",
    "description": "The firm, Mazars USA, wrote that the Trump Organization's statements of financial condition \"should no longer be relied upon.\"",
    "url": "https://www.cbsnews.com/news/trump-organization-accounting-firm-mazars-usa-financial-statements/",
    "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2022/02/14/13cbeb92-5b6d-431b-8e8a-19645db58e0a/thumbnail/1200x630/3ab1f3119879854051f376ea593ea7aa/gettyimages-628061750.jpg",
    "publishedAt": "2022-02-15T12:57:00Z",
    "content": "The accounting firm that has for years prepared annual financial statements for Donald Trump and his businesses is cutting ties with his company and says a decade's worth of the reports \"should no lo… [+3543 chars]"
    },
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Dana Cimilluca, Cara Lombardo",
    "title": "Intel Agrees to $6 Billion Deal to Buy Tower Semiconductor - The Wall Street Journal",
    "description": "U.S. semiconductor giant continues ambitious push to expand its manufacturing operations",
    "url": "https://www.wsj.com/articles/intel-near-roughly-6-billion-deal-to-buy-tower-semiconductor-11644876391",
    "urlToImage": "https://images.wsj.net/im-486018/social",
    "publishedAt": "2022-02-15T12:44:00Z",
    "content": "Intel Corp. agreed to buy Israeli chip company Tower Semiconductor Ltd. for nearly $6 billion, bolstering a plan to make more chips for other companies.\r\nIntel said early Tuesday that it would acquir… [+156 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Ben Morse and Alex Thomas, CNN",
    "title": "LeBron James floats idea of 'City of Champions' parade to celebrate LA Rams Super Bowl LVI victory - CNN",
    "description": "The 'City of Angels' has become the 'City of Champions.'",
    "url": "https://www.cnn.com/2022/02/15/sport/super-bowl-lvi-celebrations-kupp-stafford-donald-spt-intl/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220215112407-cooper-kupp-matthew-stafford-aaron-donald-disney-super-tease.jpg",
    "publishedAt": "2022-02-15T12:20:00Z",
    "content": null
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Andrew Jeong",
    "title": "Kentucky bird flu outbreak means 240,000 chickens could be killed at a Tyson operation - The Washington Post",
    "description": "The avian influenza cases do not present an immediate public health concern, federal officials said.",
    "url": "https://www.washingtonpost.com/business/2022/02/15/bird-flu-kentucky-virginia-poultry/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/G32KPJUK54I6ZA4PBT67NHGOHQ.jpg&w=1440",
    "publishedAt": "2022-02-15T10:57:31Z",
    "content": "The infections come after 29,000 turkeys were destroyed in Indiana once officials detected the presence of highly pathogenic avian influenza, or HPAI, last week in Dubois County. Federal officials sa… [+2483 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Josh Holder, Karl Russell, Stanley Reed",
    "title": "How a Ukraine Conflict Could Reshape Europe's Reliance on Russia - The New York Times",
    "description": "Europe needs Russian natural gas to help heat homes, generate electricity and power factories — a crucial factor in the diplomatic crisis.",
    "url": "https://www.nytimes.com/interactive/2022/02/15/business/energy-environment/russia-gas-europe-ukraine.html",
    "urlToImage": "https://static01.nyt.com/images/2022/02/14/us/russia-gas-europe-ukraine-promo-1644875568452/russia-gas-europe-ukraine-promo-1644875568452-facebookJumbo.png",
    "publishedAt": "2022-02-15T10:23:40Z",
    "content": "Finland\r\nWhich E.U. countries import the most Russian gas\r\nShare of country’s natural gas\r\nimports from Russia, 2020\r\nSweden\r\nNone\r\n20%\r\n40%\r\n60%\r\n80%\r\nEstonia\r\nRussia\r\nLatvia\r\nDenmark\r\nGas exports\r\n… [+9150 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Bleeding Green Nation"
    },
    "author": "Ben Natan",
    "title": "NFL Mock Draft 2022: Post-Super Bowl edition - Bleeding Green Nation",
    "description": "Projecting all the first round picks.",
    "url": "https://www.bleedinggreennation.com/2022/2/15/22934551/nfl-mock-draft-2022-post-super-bowl-philadelphia-eagles-first-round-picks-george-karlaftis-order",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ne2Kzj_kuo_rLQyuhRlCYnk0iBc=/0x175:5119x2855/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23243184/1356287394.jpg",
    "publishedAt": "2022-02-15T10:14:38Z",
    "content": "The 2021 NFL season has come to a close with the Los Angeles Rams winning the Super Bowl in dramatic fashion. Now all attention turns to an offseason that is bound to be just as exciting as the posts… [+9685 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Jack Nicas, Anton Troianovski",
    "title": "A World Away From Ukraine, Russia Is Courting Latin America - The New York Times",
    "description": "The Ukraine crisis has revived a struggle over Latin America between the U.S. and Russia, as Vladimir V. Putin seeks greater influence in the region.",
    "url": "https://www.nytimes.com/2022/02/15/world/americas/russia-putin-latin-america-bolsonaro.html",
    "urlToImage": "https://static01.nyt.com/images/2022/02/15/world/15russia-latam-01/15russia-latam-01-facebookJumbo.jpg",
    "publishedAt": "2022-02-15T10:00:26Z",
    "content": "Mr. Bolsonaro told the Brazilian press that the Russian summit was important for his administration and that he would not bring up Ukraine. In a statement, his government said that given Brazil and R… [+1261 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phys.Org"
    },
    "author": "Science X staff",
    "title": "Rocket set to hit Moon was built by China, not SpaceX, say astronomers - Phys.org",
    "description": "Astronomy experts say they originally misread the secrets of the night sky last month: it turns out that a rocket expected to crash into the Moon in early March was built by China, not SpaceX.",
    "url": "https://phys.org/news/2022-02-rocket-moon-built-china-spacex.html",
    "urlToImage": "https://scx2.b-cdn.net/gfx/news/2022/a-rocket-will-indeed-s.jpg",
    "publishedAt": "2022-02-15T08:57:45Z",
    "content": "Astronomy experts say they originally misread the secrets of the night sky last month: it turns out that a rocket expected to crash into the Moon in early March was built by China, not SpaceX.\r\nA roc… [+1623 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.com"
    },
    "author": "Andrew Liszewski",
    "title": "Epson's New Laser Projector Takes a Clever Approach to Achieve Full 4K - Gizmodo",
    "description": "4K laser projectors still aren't cheap, but they continue to drop in price, making an impressive home theater more accessible.",
    "url": "https://gizmodo.com/epson-pro-cinema-4k-projector-price-specs-1848451440",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dc2fb74c8eab0373bda444a4f21be2d9.gif",
    "publishedAt": "2022-02-15T08:01:00Z",
    "content": "Projectors were once the exclusive choice of home theater enthusiasts happy to plunk down tens of thousands of dollars for a 100-inch screen. But projectors have since dropped in price significantly,… [+2659 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Kenneth Chang",
    "title": "On Mars, a NASA Rover and Helicopter’s Year of Surprise and Discovery - The New York Times",
    "description": "The past 12 months on Mars have been both “exciting” and “exhausting” for scientists and engineers minding Perseverance and Ingenuity. And the mission is only really getting started.",
    "url": "https://www.nytimes.com/2022/02/15/science/mars-nasa-perseverance.html",
    "urlToImage": "https://static01.nyt.com/images/2022/02/15/autossell/15SCI-MARS-cover/15SCI-MARS-cover-facebookJumbo.jpg",
    "publishedAt": "2022-02-15T07:59:10Z",
    "content": "It could arrive at the delta by late May or early June. Ingenuity will try to stay ahead of Perseverance.\r\nThe helicopter flies faster than the rover can drive, but after each flight, its solar panel… [+1423 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "By Lilit Marcus, CNN",
    "title": "AirAsia flight in Malaysia rerouted after snake found on board plane - CNN",
    "description": "A domestic AirAsia flight in Malaysia was re-routed after passengers reportedly spotted a snake slithering through the plane's light fixtures.",
    "url": "https://www.cnn.com/travel/article/airasia-malaysia-snake-plane-rerouted-intl-hnk/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220215005656-airasia-klia-file-11142021-super-tease.jpg",
    "publishedAt": "2022-02-15T07:03:40Z",
    "content": "(CNN) An AirAsia flight in Malaysia was re-routed after a snake was found on the plane, the airline has confirmed. \r\nThe domestic flight was en route from Kuala Lumpur to Tawau on February 10 when se… [+1935 chars]"
    }
    ]*/

  // here I am making a constructor for making states using super func b/c constructor require obja.
  constructor(){
    super();
    console.log("Hello I am a constructor from newsItem componenet");
    this.state={
      articles:this.articles,
      loading:true,
      page:1,
    }
  }

  // ye ek method hota hai jo lifecycle method me use hota hai or ye hamesha render k bd run hota hai
  // for making async func 
  async componentDidMount(){
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3caa3c3d106943f5b5fefee466f15500&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    // this.setState({loading:true});
    // here I am using a await func which mean we are waiting to get data from API and convert it and it return a promise 
    let data=await fetch(url);
    let parseData=await data.json()
    console.log(parseData);
    this.setState({articles:parseData.articles,
       totalResults:parseData.totalResults,
      loading:false})
  }
  // Here I am making Functions for previous and next buttons.buttons are not async but function is async

  handlePrevClick=async()=>{
      console.log("I am Previous Button");

      // Using pageSize Func for Set page size
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3caa3c3d106943f5b5fefee466f15500&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({loading:true});
    console.log(parseData);

    this.setState({
      page:this.state.page-1,
      articles:parseData.articles,
      loading:false,
    })
  }

  handleNextClick=async ()=>{
    console.log("I am Next Button");
    if(!this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    }
    else{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3caa3c3d106943f5b5fefee466f15500&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({loading:true});
    console.log(parseData);
    
    this.setState({
      page:this.state.page+1,
      articles:parseData.articles,
      loading:false,
    })
  }
  }

  render() {
    console.log('render');
    return (
      <div className="container my-3">
        {/* by this we are using states and looping through JSX*/}
        {/* {this.state.articles.map((element)=>console.log(element))} */}
        <h1 className='text-center'>iNewsApp Top-Headlines</h1>
        {/* Through this we are making the loading spinner is enable only when loading is req*/}
        {this.state.loading &&<Spinner/>}
{/* there are 12 grid in bootstrap and md mean 4  */}
        <div className="row">
          {/* when we are using map we must a given a unique key to each item*/}
          {/* here i m say if loading is flase only show the result */}
          {!this.state.loading && this.state.articles.map((element)=>
          <div className="col-md-4" key={element.url}>

          {/*here I am using destructring*/}
          {/* <NewsItems title="myTitle" description="myDesc" newsUrl="TODO" imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/220215043412-ukraine-tank-exercises-02102022-restricted-super-tease.jpg"/> */}
          
          {/* here I am using ternary operator for making decission */}
          <NewsItems title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} imageUrl={element.urlToImage}/>
            </div>
          )}
        </div>
        
        {/* here I am making Previous and next Button */}
        <div className="container d-flex justify-content-between">
        {/* here I am using this because we are using class based Component*/}
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr; Previous</button>
        {/* sending page size as a props not make pagesize as a hardcose */}
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      
    )
  }
}

export default News