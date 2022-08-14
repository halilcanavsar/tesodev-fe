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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797470153037!2d28.888759415414416!3d41.01913527929974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1sen!2str!4v1660453759520!5m2!1sen!2str"
        // width="400"
        // height="300"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
    </div>
  );
};
export default BottomInformation;
