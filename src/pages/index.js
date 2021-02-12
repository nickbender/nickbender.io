import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Nick Bender" />
    <h1>Hi<span role="img" aria-label='wave'>👋,</span></h1>
    <h2>I'm Nick Bender</h2>
    <h3>I build and lead remote teams that develop great software.</h3>
    <p>
      I strongly value a growth-based mindset, systems-level thinking, pragmatic understanding of trade-offs, and emotionally-honest communication.
    </p>
    <p>
      Lately, my team is building better ways for small businesses to purchase 
      Insurance at <a href='https://huckleberry.com'>Huckleberry</a> (<a href='https://huckleberry.com/careers/category/all/'>we're hiring!</a>), but 
      I've also worked on <a href='https://my.life'>MyLife</a>'s web platform,
      on cloud infrastructure at <a href='https://ibm.com'>IBM</a>,
      customer dashboards at <a href='https://a10networks.com'>A10 Networks</a>, and cloud wifi
      managment at Uceem.</p>
    <p>
      <a href='https://www.ruby-lang.org/en/'>Ruby</a> and <a href='https://developer.mozilla.org/en-US/docs/Web/javascript'>js</a> are where 
      I spend the majority of my time.
    </p>
    <p>
      I'm likely quickest to respond to <a href='mailto:nickbender@hey.com'>email</a> but also can be found on <a href='https://twitter.com/nickbender'>twitter</a>, <a href='https://github.com/nickbender'>github</a>, and <a href='https://linkedin.com/in/nickbender35'>linkedin</a>.
    </p>
    <p>
      In my free time, I enjoy far too many hobbies, including cooking, coffee, backpacking, headphones, custom mechanical keyboards, and just about all
      forms of gaming, even if I am still <a href='https://na.op.gg/summoner/userName=Pikl'>hard stuck</a> on <a href='https://leagueoflegends.com'>league</a>.
    </p>
    <p><span role='img' aria-label='coffee'>☕️</span></p>
  </Layout>
)

export default IndexPage
