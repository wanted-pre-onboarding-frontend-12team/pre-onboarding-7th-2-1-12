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
				content={props.description ? props.description : '세상과 사람, 자동차의 교집합'}
				data-react-helmet="true"
			/>
			<meta name="keywords" content="자동차, Freemium, Sharing, Big Data, Economy" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={props.title ? props.title : '알티모빌리티 - 차량대여 서비스'} />
			<meta property="og:site_name" content={props.title ? props.title : '알티모빌리티 - 차량대여 서비스'} />
			<meta property="og:description" content={props.description ? props.description : '세상과 사람, 자동차의 교집합'} />
			<meta
				property="og:image"
				content={props.imgsrc ? props.imgsrc : 'https://static.wanted.co.kr/images/wdes/0_4.1efa9680.png'}
			/>
			<meta property="og:url" content={props.url ? props.url : 'http://www.raidea.io'} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={props.title ? props.title : '알티모빌리티 - 차량대여 서비스'} />
			<meta name="twitter:description" content={props.description ? props.description : '세상과 사람, 자동차의 교집합'} />
			<meta
				name="twitter:image"
				content={props.imgsrc ? props.imgsrc : 'https://static.wanted.co.kr/images/wdes/0_4.1efa9680.png'}
			/>
			<link rel="canonical" href={props.url ? props.url : 'http://www.raidea.io'} />
		</Helmet>
	);
};

export default MetaTag;
