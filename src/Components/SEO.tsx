import React from 'react';
import { Helmet } from 'react-helmet';
import { siteMetadata } from '../config/metadata';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website',
}) => {
    const metaTitle = title ? `${title} | ${siteMetadata.siteName}` : siteMetadata.title;
    const metaDescription = description || siteMetadata.description;
    const metaKeywords = [...siteMetadata.keywords, ...keywords].join(', ');
    const metaImage = image || siteMetadata.openGraph.images[0].url;
    const metaUrl = url || siteMetadata.siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={siteMetadata.author} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={siteMetadata.siteName} />
            <meta property="og:locale" content={siteMetadata.locale} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={siteMetadata.twitterHandle} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <link rel="canonical" href={metaUrl} />
        </Helmet>
    );
};

export default SEO; 