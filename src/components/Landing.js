/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import DeviceContainer from './DeviceContainer'

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(
	bp => `@media (max-width: ${bp}px)`
);

// Basic styles for two 'features' boxes toward bottom of page
const featuresTemplate = css`
	width: 500px;
	height: 500px;
	background: #fff;
	margin: 0 20px;
	${mq[2]} {
		margin: 20px 20px;
		height: 500px;
	}
	${mq[1]} {
		margin: 20px 20px;
		width: 95%;
		height: 700px;
	}

`;

const featuresH2 = css`
	color: #E66868;
	font-size: 21px;
	font-weight: 600;
	text-transform: uppercase;
	padding: 20px 0 20px 20px;
	margin-bottom: 50px;
	letter-spacing: .025em
`;

const featuresP = css`
	width: 95%;
	color: #EB8686;
	font-size: 17px;
	padding: 0 0 20px 20px;
	line-height: 28px;
`;

function Landing(props) {
  return (
		<div>
			<header
				css={css`
					display: block;
					overflow: hidden;
					width: 100%;
					height: 700px;
					${mq[2]} {
						height: 600px;
					};
					${mq[1]} {
						height: 500px;
					};
				`}
			>
      	<Banner />
				<div 
					css={css`
						width: 100%;
						height: 100%;
						background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
						transform: skewY(-10deg);
						transform-origin: 0;
					`}
				/>
					<div
						css={css`
							width: 50%;
							height: auto;
							position: absolute;
							top: 200px;
							left: 10%;
							color: #fff;
							${mq[1]} {
							width: 90%;
							top: 100px;
							left: 10%;
						};
						`}
					>	
					<h1
						css={css`
							letterSpacing: 2px;
						`}
					>
						A new way to engage
					</h1>
					<p
						css={css`
							width: 50%;
							color: rgb(217, 252, 255);
							font-size: 17px;
							line-height: 1.8;
							${mq[2]} {
								width: 75%;
							}
							${mq[1]} {
								width: 100%;
							}
						`}
					>
						Vase is the smart approach to engaging with your neighbors.
						See what others are up to on your block.
						Check in to see what issues within your community need to be addressed.
						Give your local officials an idea of what concerns you most.  
						Vase turns the web into a virtual town hall.  
						How will you help build your community?
					</p>
					<button
						css={css`
							height: 40px;
							border: none;
							background: #3ecf8e;
							color: #fff;
							font-size: 15px;
							font-weight: 600;
							text-shadow: 0 1px 3px rgba(36, 180, 126, .4);
							border-radius: 4px;
							padding: 0 14px;
							box-shadow: 0 10px 6px rgba(50, 50, 93, .11);
							tex-transform: uppercase;
							&:hover {
								cursor: pointer;
								transform: translateY(1px);
							}
						`}
						onClick={() => props.history.push('/register')}
					>
						Get Started
					</button>
				</div>
				<DeviceContainer />
    </header>
		
		<section
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
					height: 900px;
					background: #f6f9fc;
					transform: skewY(-10deg);
					transform-origin: 0;
					z-index: -2
				`}
			>
				<div
					css={css`
						display: flex;
						justify-content: center;
						position: absolute;
						top: 200px;
						${mq[2]} {
							top: 200px;
							flex-direction: column;
							align-items: center;
						}
						${mq[1]} {
							top: 110px;
						}
						width: 90%;
						height: 500px;
						transform: skewY(10deg)
					`}
				>
					<section css={featuresTemplate}>
						<h2 css={featuresH2}>
							Upvote community projects
						</h2>
						<p css={featuresP}>
							We believe in democratic reform at all levels of government,
							and we understand that not everyone has time to attend town hall meetings,
							public demonstrations, or even vote for local offices.  Make your voice heard by creating community
							concerns and allow others to upvote it to let local officials know what you
							deem important.
						</p>
					</section>
					<section css={featuresTemplate}>
						<h2 css={featuresH2}>
							Organize community events
						</h2>
						<p css={featuresP}>
							Want to create a community event in your city?
							March for something you believe in.  Demonstrate
							for what you believe is right.  If your message needs
							to be heard, we'll provide the platform.
						</p>
					</section>
				</div>
			</section>
		</div>
  )
};

export default Landing;
