/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g id='Page-1' fill='none' fillRule='evenodd'>
		<g id='scenarios-white' >
			<g id='seetings-white'>
				<path fill='currentColor' d='M28.1245916,12.1573109 C28.5745776,12.2368096 28.9990644,12.4558062 29.399552,12.8173006 C29.8000395,13.177295 29.9995333,13.6227881 29.9995333,14.1507798 L29.9995333,16.0257507 C30.0116344,16.5089583 29.7878027,16.9678205 29.399552,17.2557315 C28.9990644,17.5677267 28.5745776,17.7822233 28.1245916,17.9007215 L25.6931673,18.4857124 C25.5997621,18.7674705 25.497211,19.0461137 25.3856768,19.3211994 C25.2776043,19.5860404 25.1554333,19.8449067 25.0196882,20.0966873 L26.3096481,22.2656536 C26.5616403,22.6556475 26.7176354,23.1056405 26.7776335,23.6126326 C26.8361317,24.1211247 26.6786366,24.5606179 26.3081481,24.9326121 L24.9896892,26.2495916 C24.6395118,26.6126656 24.1457098,26.8007312 23.6427311,26.7625836 C23.154255,26.745512 22.6790744,26.5990216 22.2657739,26.3380902 L20.1553396,24.9896112 C19.8823481,25.1261091 19.6093566,25.2536071 19.3363651,25.3706053 C19.0618736,25.4876035 18.7693827,25.5956018 18.4573924,25.6931003 L17.9294088,28.1245624 C17.8514113,28.5745554 17.6324181,28.9990488 17.2694294,29.3995426 C16.9094406,29.8000364 16.4654544,29.9995333 15.9374708,29.9995333 L14.0625292,29.9995333 C13.5793291,30.0116346 13.120474,29.7877994 12.8325674,29.3995426 C12.5321403,29.0234548 12.3125669,28.5894075 12.1875875,28.1245624 L11.6026057,25.7215998 C11.2850958,25.6226586 10.9718352,25.5105636 10.6636349,25.3856051 C10.353985,25.2599466 10.0510847,25.1182572 9.75616316,24.9611117 L7.58873061,26.3380902 C7.21674218,26.5915863 6.76375628,26.7325841 6.22527303,26.7625836 C5.72595276,26.8060202 5.23450519,26.6167435 4.89331448,26.2495916 L3.54485643,24.9311121 C3.20128798,24.583885 3.03884836,24.0965586 3.10537011,23.6126326 C3.16536824,23.1056405 3.31086371,22.6556475 3.54485643,22.2656536 L4.92181359,19.9796892 C4.80396896,19.7434773 4.69193872,19.5044091 4.58582404,19.2627003 C4.47526425,19.010351 4.38205068,18.7507522 4.30683272,18.4857124 L1.87540838,17.9007215 C1.41057053,17.7757402 0.97652997,17.5561633 0.60044805,17.2557315 C0.212197345,16.9678205 -0.0116344127,16.5089583 0.000466718676,16.0257507 L0.000466718676,14.1507798 C0.000466718676,13.6227881 0.199960511,13.178795 0.60044805,12.8158006 C1.00093559,12.4558062 1.42542238,12.2368096 1.87540838,12.1573109 L4.27833361,11.6308191 C4.35633118,11.3578233 4.45382815,11.0833276 4.57082451,10.8103318 C4.68782087,10.5373361 4.80481723,10.2733402 4.92181359,10.0198441 L3.54485643,7.73387968 C3.30334528,7.32165178 3.15345111,6.86224202 3.10537011,6.38690063 C3.04687193,5.87840855 3.19386735,5.43891538 3.54485643,5.06692117 L4.89331448,3.74994166 C5.24430355,3.37944742 5.68828974,3.20845008 6.22527303,3.23694964 C6.76225632,3.26694917 7.21674218,3.40794698 7.58873061,3.66144304 L9.75616316,5.03842161 C10.3363777,4.72945448 10.9439519,4.47487189 11.5711067,4.27793344 L12.1875875,1.87497083 C12.2850845,1.42497783 12.4905781,1.00048443 12.8025684,0.599990665 C13.1145587,0.199496896 13.5345456,0 14.0625292,0 L15.9374708,0 C16.4654544,0 16.9049407,0.199496896 17.2559298,0.599990665 C17.6069189,1.00048443 17.8319119,1.41597797 17.9309088,1.8449713 L18.4558925,4.306433 C19.0387091,4.50064613 19.6071018,4.73572578 20.1568395,5.00992206 L22.2657739,3.66144304 C22.6557618,3.40794698 23.1147475,3.26694917 23.6427311,3.23694964 C24.1692147,3.20695011 24.6177007,3.37944742 24.9896892,3.74994166 L26.3096481,5.06842115 C26.6786366,5.43891538 26.8346318,5.87840855 26.7776335,6.38690063 C26.7176354,6.89389275 26.5616403,7.34388575 26.3081481,7.73387968 L25.0181883,9.90284593 C25.156184,10.1758417 25.2881799,10.4533374 25.414176,10.736833 C25.541672,11.0203285 25.6436688,11.3188239 25.7216664,11.6308191 L28.1245916,12.1573109 Z M28.1245916,15.877253 L28.1545907,14.2092789 C28.1087009,14.170563 28.0595153,14.1359318 28.0075953,14.1057805 C27.926539,14.0559973 27.837075,14.0214311 27.7436035,14.0037821 L24.2577119,13.2132944 L23.935222,12.1873104 C23.8749304,11.9472912 23.7967132,11.7121346 23.7012293,11.4838213 C23.5958745,11.2341621 23.4782344,10.9898673 23.3487402,10.7518327 L22.8807548,9.81434731 L24.7256974,6.73939515 C24.7807052,6.66759547 24.8251544,6.58829275 24.8576933,6.50389881 C24.8821022,6.44822424 24.8972999,6.38895236 24.9026919,6.32840154 L23.6727301,5.12692024 C23.5365328,5.12765348 23.4035438,5.1683331 23.290242,5.24391842 L20.2738359,7.17888831 L19.306366,6.67939608 C19.0737876,6.563433 18.8392612,6.45141867 18.6028879,6.34340131 C18.367974,6.23578566 18.1227181,6.15235712 17.8709107,6.09440518 L16.8449426,5.74191067 L16.0844663,2.19746581 C16.0652803,2.12023625 16.0354987,2.0460335 15.995969,1.97696924 L15.9374708,1.87497083 L14.2095246,1.87497083 C14.1616482,1.92703865 14.1221761,1.98624777 14.0925282,2.0504681 C14.0481427,2.14347164 14.0178129,2.24255055 14.002531,2.34446353 L13.1550574,5.74191067 L12.1575884,6.06440565 C11.9040963,6.14240444 11.6506042,6.23540299 11.3971121,6.34340131 C11.14212,6.44989965 10.8886279,6.57289774 10.6351358,6.70939562 L9.66766592,7.20738787 L6.53276346,5.21541886 L6.38726799,5.14042003 C6.33054066,5.11231229 6.27189612,5.08825262 6.21177345,5.06842115 L4.98181172,6.29840201 C4.98181172,6.35840108 4.99681125,6.42590003 5.02531037,6.50389881 C5.05530943,6.5818976 5.09730813,6.66889625 5.15730626,6.76789471 L7.06074703,9.93284547 L6.5927616,10.8403313 C6.47426528,11.0938274 6.37226846,11.3278238 6.28377121,11.5423204 C6.19770695,11.7526567 6.124573,11.9680546 6.06477802,12.1873104 L5.74228806,13.2132944 L2.19789834,14.0037821 C2.1316612,14.0269863 2.0678581,14.0566276 2.00740427,14.0922808 C1.96734559,14.1196748 1.92260913,14.1395015 1.87540838,14.1507798 L1.87540838,15.878753 C1.92615461,15.9246175 1.98593266,15.9593609 2.05090292,15.9807514 C2.12890049,16.0107509 2.22639746,16.0347505 2.34489377,16.0557502 L5.77228713,16.9332366 L6.09327714,17.9292211 C6.15327527,18.124218 6.22527303,18.3252149 6.31377028,18.5292117 C6.40226752,18.7347085 6.50426435,18.9447053 6.62126071,19.1592019 L7.06074703,20.0681878 L5.15580631,23.2616381 C5.10144936,23.3330655 5.057512,23.411851 5.02531037,23.4956345 C4.99826539,23.5609298 4.98302936,23.6305087 4.98031177,23.7011313 L6.2102735,24.9011126 C6.27027163,24.9011126 6.33326967,24.8861128 6.40226752,24.8576133 C6.46875028,24.8295092 6.53251538,24.7953667 6.5927616,24.7556149 L9.66766592,22.7921454 L10.6351358,23.2901377 C10.8901279,23.4266355 11.14212,23.5496336 11.3971121,23.656132 C11.6506042,23.7641303 11.9040963,23.8571288 12.1575884,23.9351276 L13.1550574,24.2576226 L14.0325301,27.7150688 C14.0520295,27.8125673 14.0775287,27.895066 14.1075278,27.9640649 C14.1311636,28.0234859 14.1657639,28.0779314 14.2095246,28.1245624 L15.9074718,28.1245624 C15.9461871,28.0786719 15.9808178,28.0294855 16.0109685,27.9775647 C16.0570102,27.9053881 16.0914287,27.8264269 16.1129654,27.7435684 L16.8749417,24.2576226 L17.9009097,23.9051281 C18.3832083,23.7451334 18.8529813,23.5496005 19.306366,23.3201372 L20.2738359,22.8221449 L23.3487402,24.7841144 L23.4957357,24.8591132 C23.5557338,24.8876128 23.612732,24.9116124 23.6712302,24.9311121 L24.9011919,23.7011313 C24.9011919,23.6411322 24.8861924,23.5736332 24.8576933,23.4956345 C24.8216622,23.4038725 24.7774871,23.3155211 24.7256974,23.2316386 L22.8807548,20.185186 L23.3487402,19.2477005 C23.4672365,19.0332039 23.5692334,18.8127073 23.6562307,18.5877108 C23.7462279,18.3627143 23.8272253,18.1347179 23.9052229,17.9007215 L24.2277129,16.9332366 L27.7151044,16.0542502 C27.8003938,16.0383174 27.8838267,16.0136892 27.9640966,15.9807514 C28.0235166,15.9571152 28.0779613,15.9225143 28.1245916,15.878753 L28.1245916,15.877253 Z M15,9.37485415 C16.5629514,9.37485415 17.8949099,9.92234563 18.9988756,11.0158286 C20.1028412,12.1093116 20.654824,13.436791 20.654824,14.9997666 C20.654824,16.5627423 20.1028412,17.8902217 18.9988756,18.9837047 C17.8949099,20.0786876 16.5629514,20.6246791 15,20.6246791 C13.456548,20.6246791 12.1350891,20.0771876 11.0311235,18.9837047 C9.92715784,17.8902217 9.37517502,16.5627423 9.37517502,14.9997666 C9.37517502,13.436791 9.92715784,12.1093116 11.0311235,11.0158286 C12.1335892,9.92084565 13.456548,9.37485415 15,9.37485415 Z M15,18.7497083 C16.0349678,18.7497083 16.9199403,18.383714 17.6519175,17.6517254 C18.3683502,16.9572486 18.7657336,15.9974332 18.7498833,14.9997666 C18.7498833,13.9647827 18.3838947,13.0797965 17.6519175,12.3478079 C16.9574515,11.6313641 15.9976511,11.2339745 15,11.249825 C13.9650322,11.249825 13.0800597,11.6158193 12.3480825,12.3478079 C11.6316498,13.0422847 11.2342664,14.0021001 11.2501167,14.9997666 C11.2501167,16.0347505 11.6161053,16.9197368 12.3480825,17.6517254 C13.0425485,18.3681692 14.0023489,18.7655588 15,18.7497083 Z' id='Shape' />
			</g>
		</g>
	</g>
);

export default class SettingsIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper>
				{paths()}
			</SVGWrapper>
		);
	}

}