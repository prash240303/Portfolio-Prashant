import "../Styles/Gallery.css";

export default function PhotosGallery() {
  return (
    <>
      <div className="card-container">

      <div className="card-container">
        {/* Existing cards */}
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg")', angle: '-5deg', x: '10%',y: '10%', caption: '"Berlin in 2009"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/london.jpg")', angle: '-1deg', x: '20%',y: '0%', caption: '"London, 2001"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/los-angeles.jpg")', angle: '-4deg', x: '0%', y: '20%', caption: '"Los Angeles - 2004"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg")', angle: '7deg', x: '-10%',y: '10%', caption: '"Venice, 1999"'}} />
        {/* 5 more random cards with increased spacing */}
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg")', angle: '10deg', x: '30%',y: '30%', caption: '"Random Card 1"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/london.jpg")', angle: '-8deg', x: '40%',y: '20%', caption: '"Random Card 2"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/los-angeles.jpg")', angle: '15deg', x: '10%',y: '40%', caption: '"Random Card 3"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg")', angle: '-3deg', x: '20%',y: '30%', caption: '"Random Card 4"'}} />
        <div className="card" style={{backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg")', angle: '-12deg', x: '5%',y : '40%', caption: '"Random Card 5"'}} />
      </div>


        {/* <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '-5deg', x: '10%', y: '0%', caption: 'Berlin in 2009'}}></div>
        <div
          className="card"
          style={{
            ...cardStyles.card,
            transform: 'translate(10%, 10%) scale(0.35) rotate(-5deg)',
            backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg')",
          }}
        >
          <div className="card-before" style={{ opacity: 0.5 }}>
            <div
              style={{
                width: '90%',
                height: '80%',
                margin: '5%',
                background: "var(--image) center center no-repeat",
                backgroundSize: 'cover',
                boxShadow: 'inset 0 0 5px rgba(34, 34, 34, .35)',
                borderRadius: '2px',
                filter: 'sepia(0.2) brightness(0.9) contrast(1.2)',
              }}
            ></div>
          </div>
          <div className="card-after" style={{ opacity: 0.75 }}>
            <div
              style={{
                fontWeight: 500,
                color: '#555',
                fontSize: '3vmin',
                textAlign: 'center',
              }}
            >
              Berlin in 2009
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            ...cardStyles.card,
            transform: 'translate(25%, 15%) scale(0.35) rotate(0deg)',
            backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg')",
          }}
        >
          <div className="card-before" style={{ opacity: 0.5 }}>
            <div
              style={{
                width: '90%',
                height: '80%',
                margin: '5%',
                background: "var(--image) center center no-repeat",
                backgroundSize: 'cover',
                boxShadow: 'inset 0 0 5px rgba(34, 34, 34, .35)',
                borderRadius: '2px',
                filter: 'sepia(0.2) brightness(0.9) contrast(1.2)',
              }}
            ></div>
          </div>
          <div className="card-after" style={{ opacity: 0.75 }}>
            <div
              style={{
                fontWeight: 500,
                color: '#555',
                fontSize: '3vmin',
                textAlign: 'center',
              }}
            >
              Berlin in 2009
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            ...cardStyles.card,
            transform: 'translate(30%, -10%) scale(0.35) rotate(-13deg)',
            backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg')",
          }}
        >
          <div className="card-before" style={{ opacity: 0.5 }}>
            <div
              style={{
                width: '90%',
                height: '80%',
                margin: '5%',
                background: "var(--image) center center no-repeat",
                backgroundSize: 'cover',
                boxShadow: 'inset 0 0 5px rgba(34, 34, 34, .35)',
                borderRadius: '2px',
                filter: 'sepia(0.2) brightness(0.9) contrast(1.2)',
              }}
            ></div>
          </div>
          <div className="card-after" style={{ opacity: 0.75 }}>
            <div
              style={{
                fontWeight: 500,
                color: '#555',
                fontSize: '3vmin',
                textAlign: 'center',
              }}
            >
              Berlin in 2009
            </div>
          </div>
        </div> */}
        {/* <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '-1deg', x: '20%', y: '20%', caption: 'Berlin in 2009'}}></div>
      <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '-4deg', x: '0%', y: '10%', caption: 'Berlin in 2009'}}></div>
      <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '7deg', x: '-10%', y: '30%', caption: 'Berlin in 2009'}}></div>
      <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '10deg', x: '30%', y: '20%', caption: 'Berlin in 2009'}}></div>
      <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '-8deg', x: '40%', y: '10%', caption: 'Berlin in 2009'}}></div>
      <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '15deg', x: '15%', y: '40%', caption: 'Berlin in 2009'}}></div>
      <div className="card" style={{image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'), angle: '-3deg', x: '5%', y: '30%', caption: 'Berlin in 2009'}}></div> */}
        {/* <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/london.jpg'); --angle: -1deg; --x: 20%; --y: 0%; --caption: 'London, 2001'}></div>
      <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/los-angeles.jpg'); --angle: -4deg; --x: 0%; --y: 20%; --caption: 'Los Angeles - 2004'}></div>
      <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg'); --angle: 7deg; --x: -10%; --y: 10%; --caption: 'Venice, 1999'}></div>
      <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'); --angle: 10deg; --x: 30%; --y: 30%; --caption: 'Random Card 1'}></div>
      <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/london.jpg'); --angle: -8deg; --x: 40%; --y: 20%; --caption: 'Random Card 2'}></div>
      <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/los-angeles.jpg'); --angle: 15deg; --x: 10%; --y: 40%; --caption: 'Random Card 3'}></div>
      <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg'); --angle: -3deg; --x: 20%; --y: 30%; --caption: 'Random Card 4'}></div>
      <div className="card" style={--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'); --angle: -12deg; --x: 5%; --y: 40%; --caption: 'Random Card 5'}></div> */}
      </div>
    </>
  );
}


// import './gallery.css';

// const cardStyles = {
//   card: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#fafafa',
//     borderRadius: '2px',
//     boxShadow: '2px 2px 5px rgba(17, 17, 17, .35)',
//     transition: 'transform 0.35s ease-out',
//     willChange: 'transform',
//   },
// };

// export default function PhotosGallery() {
//   return (
//     <div className="card-container">
//       <h1 className="heading">Polaroid Memories</h1>
//       <div
//         className="card"
//         style={{
//           ...cardStyles.card,
//           transform: 'translate(10%, 10%) scale(0.35) rotate(-5deg)',
//           backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg')",
//         }}
//       >
//         <div className="card-before" style={{ opacity: 0.5 }}>
//           <div
//             style={{
//               width: '90%',
//               height: '80%',
//               margin: '5%',
//               background: "var(--image) center center no-repeat",
//               backgroundSize: 'cover',
//               boxShadow: 'inset 0 0 5px rgba(34, 34, 34, .35)',
//               borderRadius: '2px',
//               filter: 'sepia(0.2) brightness(0.9) contrast(1.2)',
//             }}
//           ></div>
//         </div>
//         <div className="card-after" style={{ opacity: 0.75 }}>
//           <div
//             style={{
//               fontWeight: 500,
//               color: '#555',
//               fontSize: '3vmin',
//               textAlign: 'center',
//             }}
//           >
//             Berlin in 2009
//           </div>
//         </div>
//       </div>

//       {/* Add more cards with the same format */}
//       {/* Duplicate the above card and adjust the style prop for each card */}
//     </div>
//   );
// }
