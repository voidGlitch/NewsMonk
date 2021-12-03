import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Azeem Rafiq: What England's cricket racism scandal is all about",
      description:
        "Azeem Rafiq says he faced years of racist abuse while playing for Yorkshire Cricket Club.",
      url: "https://www.bbc.co.uk/news/world-59316567",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/79D4/production/_121588113_microsoftteams-image-2.png",
      publishedAt: "2021-11-17T19:04:50Z",
      content:
        "Media caption, 'It's important we don't let this moment go' - Azeem Rafiq speaks to BBC sports editor Dan Roan\r\nOver the past few weeks English cricket has been hit by allegations of racism by a form… [+4167 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "Paine to take break from cricket 'for foreseeable future'",
      description:
        'Former Australia Test captain Tim Paine is to take an immediate break from all forms of cricket "for the foreseeable future".',
      url: "https://www.bbc.co.uk/sport/cricket/59345925",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png",
      publishedAt: "2021-11-25T23:29:48Z",
      content:
        "Former Australia Test captain Tim Paine is set to miss the upcoming Ashes series against England after announcing he is to take an immediate break from all forms of cricket.\r\nIn a statement, Cricket … [+855 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "'Now is your time to be heard' - Holding tells cricket discrimination victims to come forward",
      description:
        "West Indies great Michael Holding urges individuals to 'share your story' of discrimination within cricket to a wide-ranging inquiry.",
      url: "https://www.bbc.co.uk/sport/cricket/59213148",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E824/production/_121482495_michaelholden.jpg",
      publishedAt: "2021-11-09T00:01:50Z",
      content:
        'Azeem Rafiq played for Yorkshire between 2008-2014, 2016 and 2018 before making his allegations in 2020\r\nWest Indies great Michael Holding has urged individuals to "share your story" of discriminatio… [+1454 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Virat Kohli: India man arrested over rape threats to cricketer's daughter",
      description:
        "A man has been arrested over rape threats to the daughter of Indian cricket captain Virat Kohli.",
      url: "https://www.bbc.co.uk/news/world-asia-india-59238649",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/6A23/production/_121517172_gettyimages-1255359662-170667a.jpg",
      publishedAt: "2021-11-11T06:09:02Z",
      content:
        "Image source, Getty Images\r\nImage caption, Virat Kohli and his team were viciously trolled after their shock defeat in the T20 World Cup\r\nA man has been arrested for allegedly threatening to rape the… [+2410 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "Pakistan to host 2025 Champions Trophy as ICC confirm eight men's tournaments",
      description:
        "Pakistan will host the 2025 Champions Trophy after the International Cricket Council confirm eight men's tournaments between 2024 and 2031.",
      url: "https://www.bbc.co.uk/sport/cricket/59305337",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/B26D/production/_121577654_gettyimages-697443788.jpg",
      publishedAt: "2021-11-16T12:37:38Z",
      content:
        "Pakistan won the last Champions Trophy to take place in 2017\r\nPakistan will host the 2025 Champions Trophy after the International Cricket Council confirmed eight men's tournaments between 2024 and 2… [+1232 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "Yorkshire racism scandal as relevant to England squad as on-field feats - Morgan",
      description:
        'The Yorkshire County Cricket Club racism scandal is "as serious and as relevant" to England\'s squad as any of their feats on the field, says captain Eoin Morgan.',
      url: "https://www.bbc.co.uk/sport/cricket/59222810",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/09A5/production/_121496420_gettyimages-1350217659.jpg",
      publishedAt: "2021-11-09T14:35:17Z",
      content:
        "People have to think about what they can and can't say - Moeen Ali\r\nThe Yorkshire County Cricket Club racism scandal is \"as serious and as relevant\" to England's squad as any of their feats, says cap… [+3465 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Man Utd co-chairman Glazer buys UAE T20 franchise - Reuters",
      description:
        "Manchester United co-chairman Avram Glazer has acquired a franchise in the United Arab Emirates' inaugural T20 Cricket League, the Emirates Cricket Board said on Wednesday.",
      url: "https://www.reuters.com/lifestyle/sports/man-utd-co-chairman-glazer-buys-uae-t20-franchise-2021-12-01/",
      urlToImage:
        "https://www.reuters.com/resizer/PgwieiE6LRKVho9Rftt2jXH7O64=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YA4XJOAIZJPU7EPK5RJKAWYUT4.jpg",
      publishedAt: "2021-12-01T11:36:00Z",
      content:
        "Soccer Football - FA Cup Final - Chelsea vs Manchester United - Wembley Stadium, London, Britain - May 19, 2018 Manchester United co owner Avram Glazer before the match Action Images via Reuters/Lee … [+1102 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "Yorkshire whistleblower hotline contacted by 36 people in first week",
      description:
        "Thirty-six people have contacted Yorkshire's independent whistleblower hotline in its first week of operation.",
      url: "https://www.bbc.co.uk/sport/cricket/59378363",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/737D/production/_121756592_gettyimages-1236368021.jpg",
      publishedAt: "2021-11-22T15:33:27Z",
      content:
        "Emotional Rafiq tells MPs about racism at Yorkshire\r\nThirty-six people have contacted Yorkshire's independent whistleblower hotline in its first week of operation.\r\nThe hotline was set up in the wake… [+1782 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Cricket Tasmania condemns 'appalling' treatment of Paine - Reuters",
      description:
        'Cricket Tasmania chairman Andrew Gaggin condemned Cricket Australia\'s "appalling" treatment of Tim Paine on Tuesday, saying he should never have been put in a position where he felt he had to resign as Australia test captain.',
      url: "https://www.reuters.com/lifestyle/sports/cricket-tasmania-condemns-appalling-treatment-paine-2021-11-23/",
      urlToImage:
        "https://www.reuters.com/resizer/ejYfeiXgtHgzTihDAj3WNePMHhg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q52JYZV4GNK3ZFIATKY7RZN6UU.jpg",
      publishedAt: "2021-11-23T05:08:00Z",
      content:
        'SYDNEY, Nov 23 (Reuters) - Cricket Tasmania chairman Andrew Gaggin condemned Cricket Australia\'s "appalling" treatment of Tim Paine on Tuesday, saying he should never have been put in a position wher… [+2291 chars]',
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Bangladesh's Mahmudullah retires from test cricket - Reuters",
      description:
        "Bangladesh all-rounder Mahmudullah has announced his retirement from test cricket at the age of 35 but will continue to play one-day internationals and Twenty20s, the country's cricket board (BCB) said in a statement on Wednesday.",
      url: "https://www.reuters.com/lifestyle/sports/bangladeshs-mahmudullah-retires-test-cricket-2021-11-24/",
      urlToImage:
        "https://www.reuters.com/resizer/w3MdOzUuDi6adlCo4lYDhB3kLVg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7AB5Z6R6PVKKJPQP6H33OKY7GM.jpg",
      publishedAt: "2021-11-24T14:27:00Z",
      content:
        "Nov 24 (Reuters) - Bangladesh all-rounder Mahmudullah has announced his retirement from test cricket at the age of 35 but will continue to play one-day internationals and Twenty20s, the country's cri… [+1071 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "'I had concerns about marriage', admits Malala Yousafzai",
      description:
        'The Nobel laureate says she previously questioned marriage and the "imbalance of power".',
      url: "https://www.bbc.co.uk/news/av/world-asia-59286773",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/217F/production/_121557580_p0b48f8w.jpg",
      publishedAt: "2021-11-15T04:21:43Z",
      content:
        'Nobel Peace Prize winner Malala Yousafzai, who married her partner Asser Malik last week, has addressed the "concerns" about marriage she had previously voiced to British Vogue.\r\nAppearing on the BBC… [+522 chars]',
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Melbourne Cricket Ground to stage 2022 T20 World Cup final - Reuters",
      description:
        "The next Twenty20 World Cup final will be held under lights at the Melbourne Cricket Ground (MCG) on Nov. 13 next year, the International Cricket Council (ICC) said on Tuesday.",
      url: "https://www.reuters.com/lifestyle/sports/melbourne-cricket-ground-stage-2022-t20-world-cup-final-2021-11-16/",
      urlToImage:
        "https://www.reuters.com/resizer/TNmN5Cyh_kxkTVDX9slfEXWu9Mo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QE4AQISO5NNJFFXEEFOFVKBS7I.jpg",
      publishedAt: "2021-11-16T05:56:00Z",
      content:
        "Members of the crowd watch as Australia and New Zealand play their Cricket World Cup final match at the Melbourne Cricket Ground (MCG) March 29, 2015. REUTERS/David GraySYDNEY, Nov 16 (Reuters) - The… [+2040 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Paine steps down as Australia test cricket captain after texting scandal - Reuters",
      description:
        "Tim Paine stepped down as Australia test cricket captain on Friday for sending inappropriate text messages to a female co-worker, although an investigation by governing body Cricket Australia exonerated him of any breach of its code of conduct.",
      url: "https://www.reuters.com/lifestyle/sports/paine-steps-down-australia-test-cricket-captain-after-texting-scandal-2021-11-19/",
      urlToImage:
        "https://www.reuters.com/resizer/WL_2GgDnKj_04ompRx0BGmJpYkI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y5QBLOWCD5K4LJQABBSW7AXG6Q.jpg",
      publishedAt: "2021-11-19T03:53:00Z",
      content:
        "MELBOURNE, Nov 19 (Reuters) - Tim Paine stepped down as Australia test cricket captain on Friday for sending inappropriate text messages to a female co-worker, although an investigation by governing … [+1876 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Melbourne joins clamour to replace Perth if Ashes test moved - Reuters",
      description:
        "With Perth's Ashes test in doubt over strict COVID-19 rules, authorities in Victoria state have petitioned Cricket Australia to bring the series back to the Melbourne Cricket Ground (MCG).",
      url: "https://www.reuters.com/lifestyle/sports/melbourne-joins-clamour-replace-perth-if-ashes-test-moved-2021-12-01/",
      urlToImage:
        "https://www.reuters.com/resizer/TNmN5Cyh_kxkTVDX9slfEXWu9Mo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QE4AQISO5NNJFFXEEFOFVKBS7I.jpg",
      publishedAt: "2021-12-01T06:22:00Z",
      content:
        "MELBOURNE, Dec 1 (Reuters) - With Perth's Ashes test in doubt over strict COVID-19 rules, authorities in Victoria state have petitioned Cricket Australia to bring the series back to the Melbourne Cri… [+1421 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Australia's Green welcomes step up for 'world class' Carey - Reuters",
      description:
        "Australia all-rounder Cameron Green says Alex Carey's experience in one-day cricket will help him make the adjustment to test cricket if, as widely reported, he gets the nod to replace Tim Paine for the opening Ashes clash in Brisbane next week.",
      url: "https://www.reuters.com/lifestyle/sports/australias-green-welcomes-step-up-world-class-carey-2021-12-01/",
      urlToImage:
        "https://www.reuters.com/resizer/A3kt5ol9AyiMmcL9-0hcAl2atdE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FJIGYUMMVRPILIF4TCUHFC22IE.jpg",
      publishedAt: "2021-12-01T04:34:00Z",
      content:
        "SYDNEY, Dec 1 (Reuters) - Australia all-rounder Cameron Green says Alex Carey's experience in one-day cricket will help him make the adjustment to test cricket if, as widely reported, he gets the nod… [+1986 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title: "Hales denies 'any racial connotation' in naming his dog",
      description:
        'Former England international Alex Hales "categorically and absolutely" denies there was "any racial connotation" in naming his dog.',
      url: "https://www.bbc.co.uk/sport/cricket/59324155",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/128B7/production/_121595957_hales.jpg",
      publishedAt: "2021-11-17T18:43:43Z",
      content:
        'Alex Hales has played 11 Tests, 70 one-day internationals and 60 T20 games for England but has not played for the national side since 2019\r\nFormer England international Alex Hales says he "categorica… [+1266 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "Former Yorkshire academy player alleges racist abuse from team-mates",
      description:
        "A former Yorkshire academy player has given BBC Sport a detailed account of experiencing alleged racism from team-mates at the club as a 14-year-old.",
      url: "https://www.bbc.co.uk/sport/cricket/59213299",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/EC54/production/_121500506_img-20211109-wa0010.jpg",
      publishedAt: "2021-11-09T19:55:45Z",
      content:
        "Racist comments were 'fairly regular' at Yorkshire, Tabassum Bhatti said\r\nAnother former Yorkshire academy player has given BBC Sport an account of experiencing alleged racism from team-mates at the … [+5697 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Simon Burnton",
      title: "Yorkshire cricket whistleblowing hotline contacted by 36 people",
      description:
        "<ul><li>Service launched in response to Azeem Rafiq’s allegations</li><li>Alex Hales keeps Sydney Thunder contract after talks</li></ul>A whistleblowing hotline launched by Yorkshire to allow people to safely report discrimination has been contacted by 36 ind…",
      url: "https://amp.theguardian.com/sport/2021/nov/22/yorkshire-cricket-whistleblowing-hotline-36-people-lord-patel-azeem-rafiq",
      urlToImage:
        "https://i.guim.co.uk/img/media/e91571793f2c7c2e008458829629cc853388c325/0_100_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3996723a20a038be3094a7bd18373862",
      publishedAt: "2021-11-22T16:42:54Z",
      content:
        "A whistleblowing hotline launched by Yorkshire to allow people to safely report discrimination has been contacted by 36 individuals in its first week, the club announced on Monday.\r\nThe service was i… [+2229 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Governing body ICC forms working group to determine cricket's Afghan future - Reuters",
      description:
        "The International Cricket Council has set up a working group to determine the future of the game in Afghanistan under its Taliban government, the world governing body said on Wednesday.",
      url: "https://www.reuters.com/lifestyle/sports/governing-body-icc-forms-working-group-determine-crickets-afghan-future-2021-11-17/",
      urlToImage:
        "https://www.reuters.com/resizer/2lkhFw442fPgH6Mvak1vWMOL1M0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RT5TJ6OX2NICJBEDKUCWKKQRYM.jpg",
      publishedAt: "2021-11-17T07:41:00Z",
      content:
        "Cricket - ICC Men's T20 World Cup - Super 12 - Group 2 - India v Afghanistan - Sheikh Zayed Cricket Stadium, Abu Dhabi, United Arab Emirates - November 3, 2021 Afghanistan fans celebrate. REUTERS/Ham… [+2316 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Mike Hytner",
      title:
        "Cricket Australia postpones Afghanistan Test over ‘uncertainty’ in Taliban-ruled nation",
      description:
        "<ul><li>First-ever Australia-Afghanistan Test was to be held in Hobart</li><li>Match postponed over concerns about women’s cricket under Taliban</li></ul>Cricket Australia has confirmed the postponement of this month’s scheduled one-off men’s Test against Afg…",
      url: "https://amp.theguardian.com/sport/2021/nov/05/cricket-australia-postpones-afghanistan-test-over-uncertainty-in-taliban-ruled-nation",
      urlToImage:
        "https://i.guim.co.uk/img/media/feced78be0bb0eff718da11afc4b5332b65c88a6/0_145_3162_1897/master/3162.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5df343e396af41c3cb940acb04a5562e",
      publishedAt: "2021-11-05T06:04:12Z",
      content:
        "Cricket Australia has confirmed the postponement of this months scheduled one-off mens Test against Afghanistan in Hobart until the situation in the Taliban-ruled country becomes clearer.\r\nAustralias… [+2932 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hello I am the constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonk - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
