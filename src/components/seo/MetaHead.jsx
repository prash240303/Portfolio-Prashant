import React from 'react';
import Head from 'next/head';

const MetaHead = ({
  title = 'Ashutosh Jha',
  description = 'Hey! I am a Software Engineer. I love developing stuff that makes people\'s lives easier.',
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
      <meta property="og:url" content="https://www.thealonemusk.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/nbjd4tzdl/Group%206.png?updatedAt=1691563555181-auto'
            : embedSource?.og
        }
      />

      <meta
        property="twitter:card"
        content={
          embedSource === 'default'
            ? 'summary_large_image'
            : 'summary' // Update with appropriate twitter card type
        }
      />
      <meta property="twitter:url" content="https://www.thealonemusk.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/nbjd4tzdl/Group%206.png?updatedAt=1691563555181-auto'
            : embedSource?.twitter
        }
      />
    </Head>
  );
};

export default MetaHead;
