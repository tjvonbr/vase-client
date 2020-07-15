import React, { useState } from 'react';
import Banner from './Banner';
import DeviceContainer from './DeviceContainer'

function Landing(props) {
	const [previewZipcode, setPreviewZipcode] = useState("");

	function handleChange(event) {
		setPreviewZipcode(event.target.value)
	}

	function submitHandler(event) {
    console.log(previewZipcode)
    props.history.push(`/community/${previewZipcode}`);
	}

  return (
		<div style={{'background': '#f6f9fc'}}>
			<header className="landing-cta">
      	<Banner />
					<div className="cta-content-wrapper">	
            <h1>A new way to engage</h1>
            <p className='landing-cta-content'>
              Vase is the smart approach to engaging with your neighbors.
              See what others are up to on your block.
              Check in to see what issues within your community need to be addressed.
              Give your local officials an idea of what concerns you most.  
              Vase turns the web into a virtual town hall.  
              How will you help build your community?
            </p>
            <button
              className="btn-cta"
              onClick={() => props.history.push('/register')}
            >
              Get Started
            </button>
				  </div>
				<DeviceContainer />
      </header>
		
		  <section className="landing-features">
        <div className="landing-features-outer-wrapper">
          <h1>
						Build your community
					</h1>
          <div className="landing-features-inner-wrapper">
            <section className="landing-features-template">
              <h2>Raise local awareness</h2>
              <p>
                We believe in democratic participation at all levels of government,
                and we understand that not everyone has time to attend town hallmeetings,
                public demonstrations, or even vote for local offices.  Make yourvoice heard by creating community
                concerns and allow others to upvote it to let local officialsknow what you
                deem important.
              </p>
              <form 
                className="form-landing"
                onSubmit={submitHandler}
              >
                <label>
                  <input
                    className="input-landing"
                    type="text"
                    name="zipcode"
                    onChange={handleChange}
                    value={previewZipcode}
                    placeholder="Enter your city's zipcode"
                  />
                </label>
                <button
                  id="btn-zip"
                  onClick={submitHandler}
                >
                  Go!
                </button>
              </form>
            </section>
            <section className="landing-features-template">
              <h2>
                Organize community events
              </h2>
              <p>
                Want to create a community event in your city?
                March for something you believe in.  Demonstrate
                for what you believe is right.  If your message needs
                to be heard, we'll provide the platform.
              </p>
            </section>
          </div>
        </div>
			</section>
		</div>
  )
};

export default Landing;
