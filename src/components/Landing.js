/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import DeviceContainer from './DeviceContainer'

// Basic styles for two 'features' boxes toward bottom of page
const featuresTemplate = css`
	width: 49%;
	background: #fff;
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
				`}
			>
      <Banner />
				<div 
					css={{
						width: '100%',
						height: '600px',
						background: 'linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%)',
						transform: 'skewY(-10deg)',
						transformOrigin: '0',
						zIndex: 0
					}}
				/>
				<section css={css`display: flex;`}>
					<div
						css={css`
							width: 500px;
							height: 900px;
							position: absolute;
							top: 200px;
							left: 10%;
							color: #fff;
						`}
					>	
					<h1
						css={css`
							letterSpacing: 2px;
							font-size: 40px;
						`}
					>
						A new way to engage
					</h1>
					<p
						css={{
							color: 'rgb(217, 252, 255)',
							fontSize: '17px',
							lineHeight: '1.8'
						}}
					>
						Vase is the smart approach to engaging with your neighbors.
						See what others are up to on your block.
						Check in to see what issues within your community need to be addressed.
						Give your local officials an idea of what concerns you most.  
						Vase turns the web into a virtual town hall.  
						How will you help build your community?
					</p>
					<button
						css={{
							height: '40px',
							border: 'none',
							background: '#3ecf8e',
							color: '#fff',
							fontSize: '15px',
							fontWeight: '600',
							textShadow: '0 1px 3px rgba(36, 180, 126, .4)',
							borderRadius: '4px',
							padding: '0 14px',
							boxShadow: '0 10px 6px rgba(50, 50, 93, .11)',
							textTransform: 'uppercase',
							'&:hover': {
								cursor: 'pointer',
								transform: 'translateY(1px)',
							}
						}}
						onClick={() => props.history.push('/register')}
					>
						Get Started
					</button>
				</div>
				<DeviceContainer />
      </section>
    </header>
		
		<section
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
					height: 500px;
					background: #f6f9fc;
					transform: skewY(-10deg);
				`}
			>
				<div
					css={css`
						display: flex;
						justify-content: space-between;
						width: 50%;
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
					<section css={css`${featuresTemplate}`}>
						<h2 css={css`${featuresH2}`}>
							Organize community events
						</h2>
						<p css={css`${featuresP}`}>
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
