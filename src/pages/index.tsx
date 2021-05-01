import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Button } from '../components/Layout/Button';
import { Container } from '../components/Layout/Container';
import { Plan } from '../components/Plan';
import { Comment } from '../components/Comment';

import { useThemeContext } from '../contexts/ThemeContext';

import { FaUser, FaMapMarkerAlt, FaServer, FaCheck } from 'react-icons/fa';

import {
  Main,
  SectionDetailsService,
  SectionDifferentials,
  PlanNetWorkWrapper,
  SectionPresetation,
  SectionPlan,
  SectionLocations,
  SectionCostumers,
  SectionReports,
  SectionSubscribe
} from '../styles/Home';

type PlanList = {
  title: string,
  items: string[],
  value: string,
}

type RateList = {
  image: string,
  name: string,
  location: string,
  starts: string,
  comment: string
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Index = () => {
  const plansList = [
    {
      title: "Free Plan",
      items: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices'
      ],
      value: "Free"
    },
    {
      title: 'Standard Plan',
      items: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices',
        'Connect Anyware'
      ],
      value: "$9"
    },
    {
      title: 'Premium Plan',
      items: [
        'Unlimited Bandwitch',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices',
        'Connect Anyware',
        'Get New Features'
      ],
      value: "$12"
    }
  ];

  const ratesList = [
    {
      image: '/static/people1.png',
      name: 'Viezh Robert',
      location: 'Warsaw,Poland',
      starts: '4.5',
      comment: `Wow... I am very happy to use this VPN,
      it turned out to be more than my expectations and
      so far there have been no problems. LaslesVPN always the best.`
    },
    {
      image: '/static/people2.png',
      name: 'Yessica Christy',
      location: 'Shanxi, China',
      starts: '4.9',
      comment: `I like it because I like to travel far and still can connect with high speed.`
    },
    {
      image: '/static/people3.png',
      name: 'Kim Young Jou',
      location: 'Seoul, South Korea',
      starts: '4.2',
      comment: `This is very unusual for my business that
      currently requires a virtual private network that has high security.`
    }
  ];

  const { theme } = useThemeContext();
  const [plans, setPlans] = useState<PlanList[]>(plansList);
  const [rates, setRates] = useState<RateList[]>(ratesList);

  return (
    <Main>
      <Container>
        <SectionPresetation>
          <div className="rightWrapper">
            <h1>Want anything to be <br /> easy with <b>LaslesVPN.</b></h1>
            <p>
              Provide a network for all your needs with ease
            and fun using <b>LaslesVPN</b><br /> discover interesting features from us.
          </p>

            <Button>Get Started</Button>
          </div>

          <img
            src="/static/illustration1.png"
            alt="Want anything to be easy with LaslesVPN"
          />
        </SectionPresetation>

        <SectionDetailsService>
          <ul>
            <li>
              <div className="circle">
                <FaUser
                  color={theme.colors.colorPrimary}
                  size={24}
                />
              </div>
              <div className="right">
                <strong>90+</strong>
                <span>Users</span>
              </div>
            </li>

            <hr />

            <li>
              <div className="circle">
                <FaMapMarkerAlt
                  color={theme.colors.colorPrimary}
                  size={24}
                />
              </div>
              <div className="right">
                <strong>30+</strong>
                <span>Locations</span>
              </div>
            </li>

            <hr />

            <li>
              <div className="circle">
                <FaServer
                  color={theme.colors.colorPrimary}
                  size={24}
                />
              </div>
              <div className="right">
                <strong>50+</strong>
                <span>Servers</span>
              </div>
            </li>
          </ul>
        </SectionDetailsService>

        <SectionDifferentials>
          <img src="/static/illustration2.png" alt="We Provide Many Features You Can Use" />

          <div className="rightWrapper">
            <h2>We Provide Many <br /> Features You Can Use</h2>
            <p>You can explore the features that we provide with fun <br />
             and have their own functions each feature.</p>

            <ul>
              <li>
                <div className="icon">
                  <FaCheck
                    color={theme.colors.fontWhite}
                    size={12}
                  />
                </div>
                <span>Powerfull online protection.</span>
              </li>
              <li>
                <div className="icon">
                  <FaCheck
                    color={theme.colors.fontWhite}
                    size={12}
                  />
                </div>
                <span>Internet without borders.</span>
              </li>
              <li>
                <div className="icon">
                  <FaCheck
                    color={theme.colors.fontWhite}
                    size={12}
                  />
                </div>
                <span>Supercharged VPN.</span>
              </li>
              <li>
                <div className="icon">
                  <FaCheck
                    color={theme.colors.fontWhite}
                    size={12}
                  />
                </div>
                <span>No specific time limits.</span>
              </li>
            </ul>
          </div>
        </SectionDifferentials>

      </Container>
      <PlanNetWorkWrapper>
        <Container>
          <SectionPlan>
            <h3>Choose Your Plan</h3>
            <p>Let's choose the package that is best for you and <br />
             explore it happily and cheerfully.</p>

            <div className="plans">
              {plans.map((plan) => (
                <Plan
                  key={plan.title}
                  plan={plan}
                />
              ))}

            </div>
          </SectionPlan>

          <SectionLocations>
            <h4>Huge Global Network of Fast VPN</h4>
            <p>See LaslesVPN everywhere to make it easier for you when you move<br /> locations.</p>
            <img src="/static/locations.png" alt="Huge Global Network of Fast VPN" />
          </SectionLocations>

          <SectionCostumers>
            <img src="/static/netflix.png" alt="NetFlix" />
            <img src="/static/reddit.png" alt="Reddit" />
            <img src="/static/amazon.png" alt="Amazon" />
            <img src="/static/discord.png" alt="Discord" />
            <img src="/static/spotify.png" alt="Spotify" />
          </SectionCostumers>

          <SectionReports>
            <h5>Trusted by Thousands of<br />Happy Customer</h5>
            <p>These are the stories of our customers who have
            joined us with great<br /> pleasure when using this crazy feature.</p>

            <div className="slider-wrapper">
              <Swiper
                slidesPerView={3}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {rates.map(slide => (
                  <SwiperSlide>
                    <Comment rate={slide} />
                  </SwiperSlide>
                ))}
                {rates.map(slide => (
                  <SwiperSlide>
                    <Comment rate={slide} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </SectionReports>

          <SectionSubscribe>
            <div className="right">
              <h6>Subscribe Now for <br /> Get Special Features!</h6>
              <p>Let's subscribe with us and find the fun.</p>
            </div>

            <Button>Subscribe Now</Button>
          </SectionSubscribe>

        </Container>
      </PlanNetWorkWrapper>
    </Main>
  );
}

export default Index;
