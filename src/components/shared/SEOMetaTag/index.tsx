import React from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
	title?: string;
	description?: string;
	imgsrc?: string;
	url?: string;
};

const MetaTag = (props: Props) => {
	return (
		<Helmet>
			<title>{props.title ? props.title : '알티모빌리티 - 차량대여 서비스'}</title>
			<meta
				name="description"
				content={props.description ? props.description : '알티모빌리티 - 차량대여 서비스'}
				data-react-helmet="true"
			/>
			<meta name="keywords" content="자동차" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={props.title ? props.title : '알티모빌리티 - 차량대여 서비스'} />
			<meta property="og:site_name" content="알티모빌리티 - 차량대여 서비스" />
			<meta property="og:description" content={props.description ? props.description : '알티모빌리티 - 차량대여 서비스'} />
			<meta property="og:image" content={props.imgsrc ? props.imgsrc : ''} />
			<meta property="og:url" content={props.url ? props.url : 'https://www.naver.com/'} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={props.title ? props.title : '알티모빌리티 - 차량대여 서비스'} />
			<meta name="twitter:description" content={props.description ? props.description : '알티모빌리티 - 차량대여 서비스'} />
			<meta name="twitter:image" content={props.imgsrc ? props.imgsrc : ''} />
			<link rel="canonical" href={props.url ? props.url : 'https://www.naver.com/'} />
		</Helmet>
	);
};

export default MetaTag;
