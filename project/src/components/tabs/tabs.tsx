import {useState} from 'react';
import {FilmPageTab} from '../../consts';
import Reviews from './reviews/reviews';
import Details from './details/details';
import Overview from './overview/overview';
import {Film} from '../../types/film';
import {Comments} from '../../types/comment';

type TabsProps = {
  film: Film,
  comments: Comments
}

function Tabs({film, comments}: TabsProps) {
  const [currentTab, setCurrentTab] = useState<FilmPageTab>(FilmPageTab.Overview);

  const setTab = (tab: FilmPageTab) => {
    if (currentTab === tab) {
      return;
    }
    setCurrentTab(tab);
  };

  const getCurrentTab = (tab: FilmPageTab) => {
    switch (tab) {
      case FilmPageTab.Reviews:
        return <Reviews reviews={comments}/>;
      case FilmPageTab.Details:
        return <Details {...film}/>;
      case FilmPageTab.Overview:
        return <Overview {...film}/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${currentTab === FilmPageTab.Overview && 'film-nav__item--active'}`}>
            <a onClick={() => setTab(FilmPageTab.Overview)} className='film-nav__link'>Overview</a>
          </li>
          <li className={`film-nav__item ${currentTab === FilmPageTab.Details && 'film-nav__item--active'}`}>
            <a onClick={() => setTab(FilmPageTab.Details)} className={'film-nav__link'}>Details</a>
          </li>
          <li className={`film-nav__item ${currentTab === FilmPageTab.Reviews && 'film-nav__item--active'}`}>
            <a onClick={() => setTab(FilmPageTab.Reviews)} className='film-nav__link'>Reviews</a>
          </li>
        </ul>
      </nav>
      {getCurrentTab(currentTab)}
    </div>
  );
}

export default Tabs;
