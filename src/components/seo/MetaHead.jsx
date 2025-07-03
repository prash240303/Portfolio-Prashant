import Head from 'next/head';
import PropTypes from 'prop-types';

const MetaHead = ({
  title = 'Prashant',
  description = "Hey! I am a Software Engineer. I love developing stuff that makes people's lives easier.",
  embedSource = 'default',
  ...attr
}) => {
  return (
    <Head {...attr}>
      <title>{title}</title>
      <link rel="shortcut icon" href="/media/icon.ico" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://portfolio-prash.vercel.app" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta
        property="twitter:card"
        content={
          embedSource === 'default'
            ? 'summary_large_image'
            : 'summary' 
        }
      />
      <meta property="twitter:url" content="https://portfolio-prash.vercel.app/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

MetaHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  embedSource: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      og: PropTypes.string,
      twitter: PropTypes.string,
    }),
  ]),
};

export default MetaHead;
