import Header from '../../components/Header/Header';
import AddNewRecord from '../../components/Buttons/NewRecord/NewRecord';
import SearchBar from '../../components/SearchBar/SearchBar';
import BottomSlide from '../../components/BottomSlide/BottomSlide';
import BottomInformation from '../../components/BottomInformation/BottomInformation';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <AddNewRecord />
      <Header />
      <SearchBar />
      <BottomSlide />
      <BottomInformation />
    </div>
  );
};

export default LandingPage;
