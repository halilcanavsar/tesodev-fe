import './BottomInformation.scss';

const BottomInformation = () => {
  return (
    <div className="bottom-information">
      <img
        src={require('../../assets/images/bottomleft.png')}
        alt=""
        className="bottom-image"
      />
      <div className="info">
        <h3>İletişim</h3>
        <p>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <p>Email: bilgi@tesodev.com</p>
      </div>
    </div>
  );
};
export default BottomInformation;
