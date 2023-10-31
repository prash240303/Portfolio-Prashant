import "../Styles/Gallery.css";

export default function PhotosGallery() {
  return (
    <>
      <div className="card-container">

      <div className="card-container">
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg")', angle: '-5deg', x: '10%',y: '10%', caption: '"Berlin in 2009"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/london.jpg")', angle: '-1deg', x: '20%',y: '0%', caption: '"London, 2001"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/los-angeles.jpg")', angle: '-4deg', x: '0%', y: '20%', caption: '"Los Angeles - 2004"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg")', angle: '7deg', x: '-10%',y: '10%', caption: '"Venice, 1999"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg")', angle: '10deg', x: '30%',y: '30%', caption: '"Random Card 1"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/london.jpg")', angle: '-8deg', x: '40%',y: '20%', caption: '"Random Card 2"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/los-angeles.jpg")', angle: '15deg', x: '10%',y: '40%', caption: '"Random Card 3"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg")', angle: '-3deg', x: '20%',y: '30%', caption: '"Random Card 4"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg")', angle: '-12deg', x: '5%',y : '40%', caption: '"Random Card 5"'}} />
      </div>


      </div>
    </>
  );
}
