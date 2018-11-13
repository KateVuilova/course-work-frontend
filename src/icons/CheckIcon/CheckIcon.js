/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path
		d='M15.2851562,9.21777344 C15.4088548,9.0940749 15.551106,9.03222656 15.7119141,9.03222656 C15.8727222,9.03222656 16.0149733,9.0940749 16.1386719,9.21777344 C16.2500006,9.32910212 16.3056641,9.46826088 16.3056641,9.63525391 C16.3056641,9.80224693 16.2500006,9.94140569 16.1386719,10.0527344 L10.2197266,16.0087891 L10.1455078,16.0830078 C10.0341791,16.2067063 9.89502037,16.2685547 9.72802734,16.2685547 C9.56103432,16.2685547 9.42187556,16.2067063 9.31054688,16.0830078 L6.36035156,13.1513672 C6.24902288,13.0400385 6.19335938,12.9008797 6.19335938,12.7338867 C6.19335938,12.5668937 6.24902288,12.4277349 6.36035156,12.3164062 C6.4840501,12.1927077 6.62630128,12.1308594 6.78710938,12.1308594 C6.94791747,12.1308594 7.09016865,12.1927077 7.21386719,12.3164062 L9.71875,14.8212891 L15.2851562,9.21777344 Z'
		fill='currentColor'
		fillRule='evenodd'
	/>
);

export default class CheckIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={24} height={24}>
				{paths()}
			</SVGWrapper>
		);
	}

}
